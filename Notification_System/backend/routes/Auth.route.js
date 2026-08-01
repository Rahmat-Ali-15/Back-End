import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { auth } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/profile", auth, (req, res) => {
    return res.status(200).json({
        success: true,
        msg: "Authentication Successful",
        user: req.user
    });
});

export const authRouter = router;