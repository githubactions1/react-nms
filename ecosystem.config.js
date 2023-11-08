module.exports = {
  apps : [{
    name   : "NMS-React",
    script : "npm run start"
  }]
  env: {
  PM2_RPC_SOCKET_PATH: '/etc/pm2daemon/rpc.sock',
}
}
