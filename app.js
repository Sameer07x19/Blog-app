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

app.get('/edit/:id', (req, res) => {
  const post = posts.getPost(req.params.id);
  res.render('edit-post', { post });
});

app.post('/edit/:id', (req, res) => {
  const { title, content } = req.body;
  posts.updatePost(req.params.id, title, content);
  res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
  posts.deletePost(req.params.id);
  res.redirect('/');
});

app.get("/about", (req, res) => { 
  res.render("about");
})
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
