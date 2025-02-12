// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
// Use the http module to create the server and the fs module to read the file.
// The file is located in the same directory as the comments.js file.
// The server should listen on port 3000.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("comments.html", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Error loading the file");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});