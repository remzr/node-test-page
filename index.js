#!/usr/bin/node

const http = require('node:http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// Create a local server
const server = http.createServer((req, res) => {
    
    //Runs on every request
    fs.readFile('index.html', (err, html) => {
        
        //Runs when file is rdy
        if(err){
            res.statusCode = 500;
            res.end('Server error');
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
});

//Start listening
server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
});