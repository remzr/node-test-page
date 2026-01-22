#!/usr/bin/node

const express = require("express");
const app = express();

const fs = require('fs');

const PORT = 3000;

function readHTML(path, res) {
    fs.readFile(path, (err, html) => {
        
        //Runs when file is rdy
        if(err){
            res.statusCode = 500;
            res.end('Server error');
            return;
        }

        res.statusCode = (path.includes('404.html')) ? 404 : 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
}    

// Create a local server
app.get("/contact-me.html", (req, res) => {    
    filePath = __dirname + '/contact-me.html';
    readHTML(filePath, res);
});

app.get("/about.html", (req, res) => {    
    filePath = __dirname + '/about.html';
    readHTML(filePath, res);
});

app.get("/", (req, res) => {    
    filePath = __dirname + '/index.html';
    readHTML(filePath, res);
});

app.get("/*path", (req, res) => {
    filePath = __dirname + '/404.html'
    readHTML(filePath, res);
})

//Start listening
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server running on ${PORT}!`);
});