const express = require("express");

const port = 3000;
var path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", path.join(__dirname, "public"));
app.set("views", path.join(__dirname, "/view"));

app.post("/", (req, res) => {
  if (req.body.password == password && req.body.login == login) {
    req.session.login = login;
    res.render("main", { login: login });
  } else {
    res.render("login");
  }
});

app.get("/", (req, res) => {
  if (req.session.login) {
    res.render("main");
  } else {
    res.render("login");
  }
});

app.listen(port, () => {
  console.log("Server Running.");
});
