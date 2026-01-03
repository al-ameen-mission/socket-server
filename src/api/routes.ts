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
    const { hostname, examId, examGroupId, examDetailsId } = req.body; 

    if (!hostname || typeof hostname !== 'string') {
        res.status(400).json({ error: 'Invalid or missing hostname' });
        return;
    }

    // Validation: Ensure only one filter type is active (optional strictness, but good for clarity)
    // For now, just ensure types are correct if provided
    if (examId && typeof examId !== 'string' && typeof examId !== 'number') {
        res.status(400).json({ error: 'Invalid examId' });
        return;
    }
    if (examGroupId && typeof examGroupId !== 'string' && typeof examGroupId !== 'number') {
        res.status(400).json({ error: 'Invalid examGroupId' });
        return;
    }
    if (examDetailsId && !Array.isArray(examDetailsId) && typeof examDetailsId !== 'string' && typeof examDetailsId !== 'number') {
         res.status(400).json({ error: 'Invalid examDetailsId' });
         return;
    }

    const answerPath = config.ANSWER_PATH.replace('{domain}', hostname);

    if (!fs.existsSync(answerPath)) {
        res.status(404).json({ error: 'Domain storage not found' });
        return;
    }

    try {
        // Map request body to db filter: examDetailsId (from body) might be array
        const filters = { 
            examId, 
            examGroupId, 
            examDetailsIds: Array.isArray(examDetailsId) ? examDetailsId : (examDetailsId ? [examDetailsId] : undefined) 
        };
        
        const answers = getAnswers(answerPath, studentId, filters);
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
