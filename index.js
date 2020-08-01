const http = require("http");

const listener = (req, res) => {
  console.log("Request: ", req);
  res.writeHead(200);
  res.end("Hello world");
};

const server = http.createServer(listener);
server.listen(8080);
