const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("explorePages/_prevention-cure");
});

module.exports = router;
