import express, { json } from "express";
import dotenv from "dotenv";
import { Connection } from "./config/db.config.js";
import { thoughtRouter } from "./routes/Thought.route.js";
import { authRouter } from "./routes/Auth.route.js";
dotenv.config();

const server = express();

server.use(express.json())

server.use("/auth", authRouter)

server.use("/thought", thoughtRouter)

try {
    await Connection();
    server.listen(process.env.PORT, () => {
        console.log(`Server is running on PORT ${process.env.PORT}`);
    });
} catch (error) {
    console.log("🚀 ~ error:", error);
}
