const express = require("express");
const app = express();
const ejs = require("ejs");
const PubertyRoute = require("./Routes/puberty");
const HormonesRoute = require("./Routes/hormones");
const EducationRoute = require("./Routes/education");
const MenstruationRoute = require("./Routes/menstruation");
const PreventionRoute = require("./Routes/prevention-cure");
const PrideRoute = require("./Routes/pride-flag");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/puberty", PubertyRoute);
app.use("/hormones", HormonesRoute);
app.use("/education", EducationRoute);
app.use("/menstruation", MenstruationRoute);
app.use("/prevention-cure", PreventionRoute);
app.use("/pride-flag", PrideRoute);

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
