const express = require("express");
const bodyParser = require("body-parser");

// Creating an express app and setting the port
const app = express();
const port = 3000;

// Middlewares 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Importing the posts module
const posts = require("./posts.js");

// Routes
app.get("/", (req, res) => {
  res.render("home", { posts: posts.getPosts() });
});

app.get("/newPost", (req, res) => {
  res.render("newPost");
});

app.post("/newPost", (req, res) => {
  const { title, content } = req.body;
  posts.addPost(title, content);
  console.log(req.body);
  res.redirect("/");
});


app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
