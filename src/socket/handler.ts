import { Socket } from 'socket.io';
import { logger } from '../utils/logger';
import { StudentRequest } from '../types';
import { submissionService } from '../services/submission.service';
import config from '../config/env';
import fs from 'fs';

export const handleConnection = (socket: Socket) => {
    // 1. Handshake & Context Resolution
    const referer = socket.handshake.headers.referer;
    if (!referer) {
        logger.warn(`Connection rejected: No referer (ID: ${socket.id})`);
        socket.disconnect();
        return;
    }

    const domain = new URL(referer).hostname;
    // Context Resolution
    const answerPath = config.ANSWER_PATH.replace('{domain}', domain);

    // Safety: Ensure storage exists
    if (!fs.existsSync(answerPath)) {
        logger.error(`Connection rejected: Storage path not found for domain ${domain} (${answerPath})`);
        socket.disconnect();
        return;
    }

    logger.info(`Socket Connected: ${socket.id} (Domain: ${domain})`);

    // Helper to send logs to client
    const sendClientLog = (msg: string) => socket.emit('log', msg);

    sendClientLog("Connected to socket server.");

    // --- Events ---

    socket.on('init_exam', (data: any) => {
        logger.debug(`[${socket.id}] init_exam`);
        sendClientLog("Init successfully");
    });

    socket.on('get_remaining_time', (req: { endtimestamp?: number }) => {
        const end = req.endtimestamp || 0;
        const now = Date.now();
        const diff = Math.max(0, (end - now) / 1000);
        socket.emit('remaining_time', { remaining_time: diff });
    });

    socket.on('answer_by_student', (req: StudentRequest) => {
        // Inject Context
        req.answer_path = answerPath;
        req.domain = domain;

        // Delegate to Service
        submissionService.enqueue(req);

        sendClientLog("successfully answer received.");
    });

    socket.on('disconnect', () => {
        logger.debug(`Socket Disconnected: ${socket.id}`);
    });
};
