const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/notes'){
        res.end(`path name is ${req.url}`);
    }
    else if (req.url === '/book'){
        res.end(`path name is ${res.url}`)
    }
});

server.listen(8080, () => {
    console.log('server is live');
})