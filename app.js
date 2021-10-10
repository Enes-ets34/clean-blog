const express = require("express");
const pageControllers = require("./controllers/pageControllers");
const postControllers = require("./controllers/postControllers");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

const app = express();
const ejs = require("ejs");
const path = require("path");

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// CONNECT TO DB
mongoose.connect("mongodb://localhost/cleanblog-test-db");

// MIDDLEWARES
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get("/", pageControllers.homePage);
app.get("/about", pageControllers.aboutPage);
app.get("/add", pageControllers.addPage);
app.get("/edit/:id", pageControllers.editPage);

// Get Single Post
app.get("/posts/:id", postControllers.getSinglePost);

// Get All Posts
app.post("/posts", postControllers.addPost);

// Update Post
app.put("/posts/:id", postControllers.updatePost);

//Delete a Post
app.delete("/posts/:id", postControllers.deletePost);

const port = 3000;
app.listen(port, () => {
  console.log(`Uygulama ${port} üzerinde çalışıyor...`);
});
