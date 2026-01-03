/**
 * Module dependencies.
 */
import fs from "fs";
import path from "path";
import http from 'http';
import { AddressInfo } from "net";

import { logError, logDebug, logInfo } from "./lib/log";
import app from './app';
import InitSocketIO from "./lib/sock";

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || 3000;

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Socket io
 */
InitSocketIO(server);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', logError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const adder = server.address();
  const bind = typeof adder === 'string'
      ? 'pipe ' + adder
      : 'port ' + (adder as AddressInfo).port;
  logInfo('Listening on ' + bind);
}
