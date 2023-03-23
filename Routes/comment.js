const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("Get Comment");
});
router.post("/", (req, res) => {
  const bodyData = req.body;
  const CommentBody = req.body.CommentBody;
  const userName = req.body.userName;
  console.log(CommentBody, userName);
  res.send("Post Comment");
});
module.exports = router;
