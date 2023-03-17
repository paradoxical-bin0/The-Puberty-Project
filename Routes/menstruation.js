const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("explorePages/_menstruation");
});

module.exports = router;
