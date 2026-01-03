import pino from 'pino';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info', 
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
    },
  },
});

// Override console for consistency
const originalConsole = { ...console };
console.log = (message, ...args) => logger.info(message, ...args);
console.info = (message, ...args) => logger.info(message, ...args);
console.warn = (message, ...args) => logger.warn(message, ...args);
console.error = (message, ...args) => logger.error(message, ...args);
console.debug = (message, ...args) => logger.debug(message, ...args);
