import { Router, Request, Response } from 'express';
import config from '../config/env';
import { getAnswers, getAnswersByExam, getDbStats } from '../database/manager';
import { logger } from '../utils/logger';
import fs from 'fs';
import { io } from '../socket';




const router = Router();

// CPU Percentage Tracker
let lastCpuUsage = process.cpuUsage();
let lastHrTime = process.hrtime();
let currentCpuPercent = 0;

setInterval(() => {
    const hrTime = process.hrtime(lastHrTime);
    const cpuUsage = process.cpuUsage(lastCpuUsage);
    
    lastHrTime = process.hrtime();
    lastCpuUsage = process.cpuUsage();
    
    const elapTimeMS = hrTime[0] * 1000 + hrTime[1] / 1000000;
    const elapUserMS = cpuUsage.user / 1000;
    const elapSystMS = cpuUsage.system / 1000;
    const cpuPercent = (100 * (elapUserMS + elapSystMS) / elapTimeMS);
    
    currentCpuPercent = Math.round(cpuPercent * 10) / 10; // 1 decimal place
}, 2000).unref();

router.get('/', (req, res) => {
    res.render('index', { 
        title: 'WTOS Examination System',
        SOCKET_IO_URL: config.SOCKET_IO_URL 
    });
});

router.post('/answers/exam/:eId', (req: Request, res: Response) => {
    const eId = req.params.eId;
    const { hostname, sId, egId, edId } = req.body; 

    // Basic Validation
    if (!hostname) {
        res.status(400).json({ error: 'Hostname required' });
        return;
    }

    const answerPath = config.ANSWER_PATH.replace('{domain}', hostname);

    if (!fs.existsSync(answerPath)) {
        res.status(404).json({ error: 'Domain storage not found' });
        return;
    }

    try {
        const answers = getAnswersByExam(answerPath, eId, { sId, egId, edId });
        res.json(answers);
    } catch (e) {
        logger.error(`API Error fetching answers: ${e}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.get('/stats', (req, res) => {
    try {
        const dbStats = getDbStats();
        const queueStats = require('../services/submission.service').submissionService.getQueueStats();
        const memUsage = process.memoryUsage();
        const cpuUsage = process.cpuUsage();

        res.json({
            database: dbStats,
            queue: queueStats,
            sockets: {
                connected: io ? io.engine.clientsCount : 0
            },
            cpu: {
                percentage: currentCpuPercent
            },
            memory: {
                rss: Math.round(memUsage.rss / 1024 / 1024), // MB
                heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024), // MB
                external: Math.round(memUsage.external / 1024 / 1024), // MB
            },
            uptime: process.uptime()
        });
    } catch (e) {
        logger.error(`Error in /stats: ${e}`);
        res.status(500).json({ error: 'Stats error' });
    }
});

export default router;
