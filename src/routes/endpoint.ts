import express, { Request, Response, NextFunction } from 'express';
import { getStudentAnswers } from '../lib/db';
import fs from 'fs';

const router = express.Router();

/* GET home page. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
    res.render('index', {
        title: 'WTOS Examination System',
        SOCKET_IO_URL: process.env.SOCKET_IO_URL
    });
});

/* GET student answers */
router.get('/answers/:studentId', async function(req: Request, res: Response, next: NextFunction) {
    const studentId = req.params.studentId;
    
    // Domain resolution logic (same as socket)
    // In HTTP, we might get referer, or we might need to assume the host header or a query param.
    // For now, let's use the referer or Host header.
    const hostname = req.hostname; // Express parses Host header
    
    const answerPath = (process.env.ANSWER_PATH || '').replace("{domain}", hostname);
    
    // Safety check
    if (!fs.existsSync(answerPath)) {
        res.status(404).json({ error: "Domain storage not found" });
        return;
    }

    try {
        const answers = getStudentAnswers(answerPath, studentId);
        res.json(answers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to retrieve answers" });
    }
});

export default router;
