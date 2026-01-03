import pino from 'pino';

// Configure Pino
export const logger = pino({
  level: process.env.LOG_LEVEL || 'info', // Default to info
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname', // Clean up output
    },
  },
});

// Override default console methods (as requested)
// This ensures that even third-party libraries using console.log get pretty printed
const originalConsole = { ...console };

console.log = (message, ...args) => logger.info(message, ...args);
console.info = (message, ...args) => logger.info(message, ...args);
console.warn = (message, ...args) => logger.warn(message, ...args);
console.error = (message, ...args) => logger.error(message, ...args);
console.debug = (message, ...args) => logger.debug(message, ...args);


// Backward compatibility helper (optional, can be removed if we refactor all calls)
export const logError = (ob: any) => logger.error(ob);
export const logWarning = (ob: any) => logger.warn(ob);
export const logDebug = (ob: any) => logger.debug(ob);
export const logCritical = (ob: any) => logger.fatal(ob);
export const logInfo = (ob: any) => logger.info(ob);
