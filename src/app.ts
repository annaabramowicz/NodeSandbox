import express, {
  NextFunction,
  Request,
  request,
  Response,
  response,
} from "express";
import path from "path";

const app = express();
const PORT = 3100;

const users = [
  { id: 1, name: "Jonh Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
];
//Logger middleware
const logger = (request: Request, response: Response, next: NextFunction) => {
  console.log(`${request.method} ${request.url}`);
  //next - czyli to jest done -> nastepny middleware
  next();
};

//listen for request
app.get("/", (request, response) => {
  console.log(request.url);
  console.log(request.method);
  //zamiast
  // res.write()
  // res.end()
  response.sendFile("./index.html", {
    root: path.join(__dirname, "../views"),
  });
});
app.get("/about", (request, response) => {
  response.sendFile("./views/about.html", {
    root: path.join(__dirname, "../views"),
  });
});

app.get("/about-us", (request, response) => {
  response.redirect("/about");
});
//middleware
//musi byc na koncu
//sami musimy ustawic error
app.use((request, response) => {
  response.status(400).end(`Invalid url`);
});

app.listen(PORT, () => {
  console.log(`Running port ${PORT}`);
});
