import http from 'http';
import app from './app';
import config from './config/env';
import { logger } from './utils/logger';
import { initSocketServer } from './socket';

const port = config.PORT;
app.set('port', port);

const server = http.createServer(app);

// Initialize Socket.IO
initSocketServer(server);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error: any) {
    if (error.syscall !== 'listen') throw error;
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            logger.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    if (!addr) return;
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    logger.info(`Listening on ${bind}`);
}
