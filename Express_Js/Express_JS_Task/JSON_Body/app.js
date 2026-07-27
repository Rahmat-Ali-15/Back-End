import express from "express";

const app = express();

const PORT = 4100

app.use(express.json());

const data = []

app.post("/user", (req, res) => {
    const {name, age} = req.body;

    data.push({name, age})

    res.status(201).json(
        {
            success: true,
            msg: "User Added Successfully",
            data: data
        }
    )
})

app.get("/user", (req, res) => {
    res.status(200).json(
        {
            success: true,
            data: data
        }
    )
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})