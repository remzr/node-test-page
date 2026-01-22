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
app.get("/", (req, res) => {
    
    let filePath; 

    //Which file has to be read?
    if (req.url === '/' || req.url === '/index.html') {
        filePath = __dirname + '/index.html';
    } else if (req.url === '/about.html') {
        filePath = __dirname + '/about.html';
    } else if (req.url === '/contact-me.html') {
        filePath = __dirname + '/contact-me.html';
    } else {
        filePath = __dirname + '/404.html';
    }

    //Runs on every request
    readHTML(filePath, res);
});

//Start listening
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server running on ${PORT}!`);
});