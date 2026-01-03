module.exports = {
  apps: [{
    name: "alameen-socket",
    script: "./src/server.ts",
    interpreter: "node",
    interpreter_args: "--import tsx --env-file=.env",
    instances: 1,
    exec_mode: "fork",
    autorestart: true,
    watch: false,
    max_memory_restart: '900M', // Restart if exceeds 900MB RAM
    env: {
      NODE_ENV: "production",
      PORT: 3000
    },
    error_file: "logs/err.log",
    out_file: "logs/out.log",
    merge_logs: true,
    time: true
  }]
};
