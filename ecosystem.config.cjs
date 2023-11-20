module.exports = {
  apps: [
    {
      name: "NMS-React",
      script: "npm run prod ",
    },
  ],
  env: {
    PM2_RPC_SOCKET_PATH: '/etc/pm2daemon/rpc.sock',
  }
};

