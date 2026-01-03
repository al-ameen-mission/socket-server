import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
    res.render('index', {
        title: 'WTOS Examination System',
        SOCKET_IO_URL: process.env.SOCKET_IO_URL
    });
});

export default router;
