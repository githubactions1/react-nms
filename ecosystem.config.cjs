module.exports = {
  apps: [
    {
      name: "react_nms",
      script: "npm run start ",
    },
  ],
  env: {
    PM2_RPC_SOCKET_PATH: '/etc/pm2daemon/rpc.sock',
  },
  
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  },
};

