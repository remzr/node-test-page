#!/usr/bin/node

const http = require('node:http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// Create a local server
const server = http.createServer((req, res) => {
    
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
    fs.readFile(filePath, (err, html) => {
        
        //Runs when file is rdy
        if(err){
            res.statusCode = 500;
            res.end('Server error');
            return;
        }

        res.statusCode = (filePath.includes('404.html')) ? 404 : 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
});

//Start listening
server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
});