interface Config {
  PORT: number;
  NODE_ENV: string;
  ANSWER_PATH: string;
  SOCKET_IO_URL?: string;
  DB_POOL_SIZE: number;
}

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  ANSWER_PATH: process.env.ANSWER_PATH || '/tmp/answers/{domain}/', // Fallback for safety
  SOCKET_IO_URL: process.env.SOCKET_IO_URL,
  DB_POOL_SIZE: Number(process.env.DB_POOL_SIZE) || 5
};

if (!process.env.ANSWER_PATH) {
    console.warn('WARNING: ANSWER_PATH not set in environment. Using default /tmp base.');
}

export default config;
