import express  from 'express';
import { AuthMiddleware } from './AuthMiddleware.js';

const app = express();

app.get("/student", AuthMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        msg: "Authorized Access"
    })
})

app.listen(4000, () => {
    console.log("Server is runnig")
})
 