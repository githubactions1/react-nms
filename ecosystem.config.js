module.exports = {
  apps: [
    {
      name: "NMS-React",
      script: "npm run start --port 3000",
    },
  ],
  env: {
    PM2_RPC_SOCKET_PATH: '/etc/pm2daemon/rpc.sock',
  }
};

