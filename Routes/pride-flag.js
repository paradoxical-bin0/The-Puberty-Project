const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("explorePages/_pride-flag");
});

module.exports = router;
