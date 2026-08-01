import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const Connection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("MongoDB Connected Successfully ✅")
    } catch (error) {
        console.log("MongoDB Connection Error");
        console.log("🚀 ~ error:", error);
        throw error;
    }
}