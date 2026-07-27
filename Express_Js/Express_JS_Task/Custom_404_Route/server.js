import express from "express"

const server = express();
const PORT = 4500;

server.get("/", (req, res) => {
    res.status(200).json(
        {
            success: true,
            msg: "Welcome to the Home Page"
        }
    )
})

server.get("/about", (req, res) => {
    res.status(200).json(
        {
            success: true,
            msg: "Welcome to the About Page"
        }
    )
})

server.use((req, res) => {
    res.status(404).json(
        {
            success: false,
            msg: "Route Not Found"
        }
    )
})

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})