// inportujemy klase
// const { __express } = require("hbs");
// const http = require("http");
import http from "http";
// const fs = require("fs");
import fs from "fs";
// import Logger from "./logger.js";

type User = {
  id: number;
  name: string;
};
const fun = (user: User) => {
  console.log(`user ${user.id}`);
  return user.name;
};

// const server = http.createServer();

// server.on("connection", (socket) => {
//   console.log("new connection");
// });
// console.log(__dirname);
// console.log(__filename);npm
// console.log(__express);

// const os = require("os");

const server = http.createServer((req, res) => {
  let path = "./view/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      // res.end(); // jesli bedzie wiele write
      // przy jednym
      res.end(data);
    }
  });
});
console.log("hej    fdgtedrg");
server.listen(3033, () => {
  console.log("listen server 123");
});

// const fs = require("fs");

// const readStream = fs.createReadStream("./docs/blog3.txt", {
//   encoding: "utf8", // do formatu dla odczytu
// });
// const writeStream = fs.createWriteStream("./docs/blog4.txt");

//data event, za kazdymm razem kiedy otrzymamy chunk of data wołały jest callback
// readStream.on("data", (chunk) => {
//   console.log("-----chunk-------");
//   console.log(chunk.toString());
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// console.log("listen port 3000...");
//piping
// readStream.pipe(writeStream);
