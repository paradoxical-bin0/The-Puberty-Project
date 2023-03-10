const express = require("express");
const app = express();
const ejs = require("ejs");
const PubertyRoute = require("./Routes/puberty");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/puberty", PubertyRoute);

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/explore", (req, res) => {
  res.render("explore");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server is live : http://localhost:3000/");
});
