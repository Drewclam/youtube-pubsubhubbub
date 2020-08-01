const http = require("http");
const url = require("url");

const listener = (req, res) => {
  console.log("Parsing request...");
  const queryData = url.parse(req.url, true).query;
  console.log("hub challenge:", queryData["hub.challenge"]);
  res.writeHeader(200);
  if (queryData["hub.challenge"]) {
    res.write(queryData["hub.challenge"]);
  }
  console.log("Done..." + res);
  res.end();
};

const server = http.createServer(listener);
server.listen(process.env.PORT || 8080);

// curl -X POST https://pubsubhubbub.appspot.com/ -d'hub.mode=subscribe' -d'hub.topic=https://www.youtube.com/channel/UCu1UXd-4-X9aAhXgajYSWYw' -d'hub.callback=https://youtube-pubsubhubbub.herokuapp.com/' -d'hub.verify=sync'
