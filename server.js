var liveServer = require('live-server');

var params = {
  port: 8181 || process.env.PORT,
  host: "0.0.0.0" || process.env.IP,
  file:'pass.html'
}
liveServer.start(params)
