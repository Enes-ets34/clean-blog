const Post = require("../models/Post");

exports.homePage = async (req, res) => {
  const posts = await Post.find().sort("-date");
  res.render("index", { posts });
};
exports.aboutPage = (req, res) => {
  res.render("about");
};
exports.addPage = (req, res) => {
  res.render("add_post");
};
exports.editPage = async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.render("edit", { post });
};
