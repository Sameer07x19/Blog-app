import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))




app.get("/", (req,res) => {
    res.render("home.ejs")
})

app.post("/newPost",(req,res) => {
    res.render("newPost.ejs")
})

app.post("/myblogs",(req,res) => {
    var title = req.body.title;
    var content = req.body.content;
    res.render("myBlogs.ejs",{
        title: title,
        content: content
    })
})




app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})