const express = require("express");

const app = express();

//listen for request
app.listen(3100);

app.get("/", (req: any, res: any) => {
  // res.send("<p>home page</p>");
  //zamiast
  // res.write()
  // res.end()
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req: any, res: any) => {
  // res.send("<p>about page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/about-us", (req: any, res: any) => {
  res.redirect("/about");
});
//middleware
//musi byc na koncu
//sami musimy ustawic error
app.use((req: any, res: any) => {
  res.status(404).res.sendFile("./views/404.html", { root: __dirname });
});
