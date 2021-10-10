const Post = require("../models/Post");

exports.getSinglePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", { post });
};
exports.addPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

exports.updatePost = async (req, res) => {
  let post = await Post.findOne({ _id: req.params.id });

  post.title = req.body.title;
  post.description = req.body.description;
  post.detail = req.body.detail;

  post.save();
  res.redirect(`/posts/${req.params.id}`);
};

exports.deletePost = async (req, res) => {
  

  await Post.findByIdAndDelete(req.params.id);

  res.redirect(`/`);
};
