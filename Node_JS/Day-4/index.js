// # Stream (Chunks)


const fs = require('fs');

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/note' && req.method === "GET"){
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1><i>Hello data</i></h1>')
    }
    else{
        res.end('not found')
    }
});

server.listen(7000, () => {
    console.log('Server in index file port 7000 is running');
})