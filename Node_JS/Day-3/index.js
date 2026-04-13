const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello server... 1')
    res.write('Hello server... 2')
    res.end('\nexit')
})

server.listen(8000, () => {
    console.log('Server is live')
})