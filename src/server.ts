const http = require("http");
// import http from "http";
const fs = require("fs");
// import fs from "fs";

type User = {
  id: number;
  name: string;
};
const fun = (user: User) => {
  console.log(`user ${user.id}`);
  return user.name;
};

const server = http.createServer((req: any, res: any) => {
  console.log("server dziala");
  let path = "./views";

  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
  }

  fs.readFile(path, (err: any, data: any) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      // res.end(); // jesli bedzie wiele write
      // przy jednym
      res.end();
    }
  });
});
