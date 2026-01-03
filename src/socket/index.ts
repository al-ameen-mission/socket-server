import { Server as HttpServer } from 'http';
import { Server, Socket } from 'socket.io';
import config from '../config/env';
import { logger } from '../utils/logger';
import { handleConnection } from './handler';

export const initSocketServer = (httpServer: HttpServer) => {
    const io = new Server(httpServer, {
        path: '/io',
        allowEIO3: true, // Support legacy clients (v2/v3)
        cors: {
            origin: "*", 
            methods: ["GET", "POST"]
        }
    });

    logger.info('Socket.IO initialized');

    io.on('connection', (socket: Socket) => {
        handleConnection(socket);
    });

    return io;
};
