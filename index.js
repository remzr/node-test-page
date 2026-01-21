#!/usr/bin/node

const http = require('node:http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

//Get index.html
fs.readFile('index.html', (err, html) => {
    if(err){
        throw err;
    }
});

// Create a local server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();
});

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
});