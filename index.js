const http = require("http");
const url = require("url");

const listener = (req, res) => {
  console.log("Request: ", req);
  const queryData = url.parse(req.url, true).query;
  console.log(queryData);
  res.writeHead(200);
  if (queryData["hub.challenge"]) {
    res.end(queryData["hub.challenge"]);
  }

  res.end("Hello world");
};

const server = http.createServer(listener);
server.listen(process.env.PORT || 8080);
