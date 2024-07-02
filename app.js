import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.get("/", (req,res) => {
    res.render("home.ejs")
})
app.post("/compose",(req,res) => {
    res.render("compose.ejs")
})
app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})