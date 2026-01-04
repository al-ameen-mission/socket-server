import { Router, Request, Response } from 'express';
import { StudentRequest } from '../types';
import config from '../config/env';
import { getAnswers, getAnswersByExam, getDbStats } from '../database/manager';
import { logger } from '../utils/logger';
import fs from 'fs';
import { io } from '../socket';
import { submissionService } from '../services/submission.service';

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

router.post('/answers/student/:sId', (req: Request, res: Response) => {
    const sId = req.params.sId;
    const { hostname, eId, egId, edId, edIds } = req.body;

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
        // Normalize edId/edIds
        let targetEdIds: (string | number)[] | undefined = edIds;
        if (!targetEdIds && edId) {
            targetEdIds = [edId];
        }

        const answers = getAnswers(answerPath, sId, { eId, egId, edIds: targetEdIds });
        res.json(answers);
    } catch (e) {
        logger.error(`API Error fetching student answers: ${e}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/submissions/bulk', (req: Request, res: Response) => {
    const { hostname, answers } = req.body;

    // Basic Validation
    if (!hostname) {
        res.status(400).json({ error: 'Hostname required' });
        return;
    }

    if (!Array.isArray(answers) || answers.length === 0) {
        res.status(400).json({ error: 'Answers array required' });
        return;
    }

    const answerPath = config.ANSWER_PATH.replace('{domain}', hostname);

    if (!fs.existsSync(answerPath)) {
        res.status(404).json({ error: 'Domain storage not found' });
        return;
    }

    try {
        let queuedCount = 0;
        for (const answer of answers as StudentRequest[]) {
            // Inject Context
            answer.answer_path = answerPath;
            answer.domain = hostname;
            
            // Basic validation for individual answer
            if (answer.sId && answer.qId && answer.ans) {
                submissionService.enqueue(answer);
                queuedCount++;
            }
        }
        
        res.json({ 
            message: 'Answers queued successfully', 
            count: queuedCount 
        });
    } catch (e) {
        logger.error(`API Error processing bulk submission: ${e}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/stats', (req, res) => {
    try {
        const dbStats = getDbStats();
        const queueStats = submissionService.getQueueStats();
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
