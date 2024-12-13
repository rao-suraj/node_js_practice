const http = require("http");

port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.url == "/user") {
    res.setHeader("Content-Tupe", "text/html");
    res.end("<h1>User</h1> <p> Suraj </p>");
  } else {
    res.setHeader("Content-Tupe", "text/html");
    res.end("<h1>Header</h1> <p> Paragraph </p>");
  }
});

server.listen(port, () => {
  console.log("LIstening");
});
