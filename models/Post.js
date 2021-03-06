const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  description: String,
  detail: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});
// CREATE MODEL
const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
