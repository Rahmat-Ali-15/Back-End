import express from "express"

const server = express()

const port = 3000;

server.get("/user/:id", (req, res) => {
    res.send(req.params)
})

server.get("/product/:category/:id", (req, res) => {
    res.send(req.params)
})

server.listen(port, () => {
    console.log(`Server is Running on ${port}`)
})