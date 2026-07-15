const http = require("http")
const url = require("url")

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html")
})

server.listen(3000, () => {
    console.log("Server is Running")
})