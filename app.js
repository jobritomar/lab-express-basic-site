
const express = require("express")
const path = require("path")
const app = express()

app.use(express.static("public"))

//page home
app.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname,"pages","home.html"))
})

//page about
app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname,"pages","about.html"))
})

//page works
app.get('/works', (req,res) => {
    res.sendFile(path.join(__dirname,"pages","works.html"))
})

//page photogallery
app.get('/photos', (req,res) => {
    res.sendFile(path.join(__dirname,"pages","photoGallery.html"))
})

//other pages


//url - local host

app.listen(5000,() => console.log("server is running"))
