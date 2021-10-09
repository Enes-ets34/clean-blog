const express = require("express");

const Post = require("./models/Post");
const mongoose = require("mongoose");

const app = express();
const ejs = require("ejs");
const path = require("path");

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// CONNECT TO DB
mongoose.connect("mongodb://localhost/cleanblog-test-db");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get("/", async (req, res) => {
  const posts = await Post.find();
  res.render("index", { posts });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add", (req, res) => {
  res.render("add_post");
});
app.get("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  console.log("post :>> ", post);
  res.render("post", { post });
});

app.post("/posts", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Uygulama ${port} üzerinde çalışıyor...`);
});
