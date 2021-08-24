var liveServer = require('live-server');

var params = {
  port: process.env.PORT || 80  ,
  host: process.env.IP|| "0.0.0.0",
  file:'pass.html'
}
liveServer.start(params)
