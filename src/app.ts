import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import loggerMiddleware from 'morgan';
import createError from 'http-errors';
import apiRoutes from './api/routes';
import { logger } from './utils/logger';

const app = express();

// View Engine
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'twig');

// Middleware
// Use 'combined' or 'dev' for morgan but pipe to our logger
app.use(loggerMiddleware('dev', {
    stream: { write: (msg) => logger.info(msg.trim()) }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));

// Routes
app.use('/', apiRoutes);

// 404 Handler
app.use((req, res, next) => {
    next(createError(404));
});

// Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

export default app;
