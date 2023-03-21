// require modules
const express = require("express");
const ejs = require("ejs");
const app = express();
const PubertyRoute = require("./Routes/puberty");
const HormonesRoute = require("./Routes/hormones");
const EducationRoute = require("./Routes/education");
const MenstruationRoute = require("./Routes/menstruation");
const PreventionRoute = require("./Routes/prevention-cure");
const PrideRoute = require("./Routes/pride-flag");
const CommentRoute = require("./Routes/comment");
const PostCmt = require("./Routes/postcmt");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const model = require("./model/model");

// mongoodb connection
mongoose
  .connect(config.mongoDb.Url)
  .then((res) => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// app use and set
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/puberty", PubertyRoute);
app.use("/hormones", HormonesRoute);
app.use("/education", EducationRoute);
app.use("/menstruation", MenstruationRoute);
app.use("/prevention-cure", PreventionRoute);
app.use("/pride-flag", PrideRoute);
app.use("/comment", CommentRoute);
app.use("/postcmt", PostCmt);

// app routes
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/test", (req, res) => {
  const data = new model({
    commentBody: "Somethin nice and new",
    userName: "Deadpool712",
  });
  data
    .save()
    .then((data) => {
      console.log("Save to sb => ", data);
    })
    .catch((err) => {
      console.log(err);
    });
  res.send(config.mongoDb.Url);
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

app.get("/faq", function (req, res) {
  res.render("faq");
});

app.listen(3000, () => {
  console.log("Server is live : http://localhost:3000/");
});
