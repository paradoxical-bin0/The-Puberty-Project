const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  commentBody: { type: String, required: true },
  userName: { type: String, require: true },
});

const commennts = mongoose.model("commentCollections", commentSchema);
module.exports = commennts;
