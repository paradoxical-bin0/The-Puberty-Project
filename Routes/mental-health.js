const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("explorePages/_mental-health");
});

module.exports = router;
