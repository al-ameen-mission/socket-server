interface Config {
  PORT: number;
  NODE_ENV: string;
  ANSWER_PATH: string;
  SOCKET_IO_URL?: string;
}

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  ANSWER_PATH: process.env.ANSWER_PATH || '/tmp/answers/{domain}/', // Fallback for safety
  SOCKET_IO_URL: process.env.SOCKET_IO_URL
};

if (!process.env.ANSWER_PATH) {
    console.warn('WARNING: ANSWER_PATH not set in environment. Using default /tmp base.');
}

export default config;
