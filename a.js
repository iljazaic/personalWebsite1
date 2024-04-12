const express = require("express");
var fs = require('fs');
const http = require("http");
const https = require("https")

const app = express();
const server = http.createServer(app);
var files = fs.readdirSync(__dirname+"\\assets\\images");

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'\\home\\home.html');
})
app.get('/home', (req, res)=>{
    res.sendFile(__dirname+'\\home\\home.html');
})
app.get('/about', (req, res)=>{
    res.sendFile(__dirname+'\\about\\about.html');
})
app.get('/projects', (req, res)=>{
    res.sendFile(__dirname+'\\projects\\projects.html');
})
app.get('/contacts', (req, res)=>{
    res.sendFile(__dirname+'\\contact\\contact.html');
})
app.get('/projects/0', (req, res)=>{
    res.sendFile(__dirname+'\\project_pages\\projectPage_0.html');
})
app.get('/global.css', (req, res)=>{
    res.sendFile(__dirname+'\\global.css');
})
app.get('/global.js', (req, res)=>{
    res.sendFile(__dirname+'\\global.js');
})


files.forEach(image => {
    app.get('/assets/images/'+image, (req, res)=>{
        res.sendFile(__dirname+'\\assets\\images\\'+image);
    })
    
});


server.listen(9090, ()=>{
    console.log("user connected");
})