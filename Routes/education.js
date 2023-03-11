const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("explorePages/_education");
});

module.exports = router;
