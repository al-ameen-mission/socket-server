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

router.get('/answers/:studentId', (req: Request, res: Response) => {
    const studentId = req.params.studentId;
    const hostname = req.hostname; // or logic to extract domain

    const answerPath = config.ANSWER_PATH.replace('{domain}', hostname);

    if (!fs.existsSync(answerPath)) {
        res.status(404).json({ error: 'Domain storage not found' });
        return;
    }

    try {
        const answers = getAnswers(answerPath, studentId);
        res.json(answers);
    } catch (e) {
        logger.error(`API Error fetching answers: ${e}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
