const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
};

const serverListeningCallback = function () {
  console.log("Server started");
};

const server = http.createServer(requestListener);
server.listen(8080, serverListeningCallback);
