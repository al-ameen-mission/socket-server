import { Router, Request, Response } from 'express';
import config from '../config/env';
import { getAnswers } from '../database/manager';
import { logger } from '../utils/logger';
import fs from 'fs';

const router = Router();

router.get('/', (req, res) => {
    res.render('index', { 
        title: 'WTOS Examination System',
        SOCKET_IO_URL: config.SOCKET_IO_URL 
    });
});

router.post('/answers/:studentId', (req: Request, res: Response) => {
    const studentId = req.params.studentId;
    const { hostname, examId, examDetailsId } = req.body; // Extract hostname and optional filters

    if (!hostname) {
        res.status(400).json({ error: 'Missing hostname in request body' });
        return;
    }

    const answerPath = config.ANSWER_PATH.replace('{domain}', hostname);

    if (!fs.existsSync(answerPath)) {
        res.status(404).json({ error: 'Domain storage not found' });
        return;
    }

    try {
        const answers = getAnswers(answerPath, studentId, { examId, examDetailsId });
        res.json(answers);
    } catch (e) {
        logger.error(`API Error fetching answers: ${e}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/stats', (req, res) => {
    try {
        const dbStats = require('../database/manager').getDbStats();
        const queueStats = require('../services/submission.service').submissionService.getQueueStats();
        const memUsage = process.memoryUsage();

        res.json({
            database: dbStats,
            queue: queueStats,
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
