import express from "express"

const server = express()
const port = 8001

server.get("/search", (req, res) => {
    res.send(req.query)
})

server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})