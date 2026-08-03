import express from "express";
import { getMe, login, register } from "../controllers/auth.controller.js";
import { auth } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);


router.get("/me", auth, getMe);

export const authRouter = router;