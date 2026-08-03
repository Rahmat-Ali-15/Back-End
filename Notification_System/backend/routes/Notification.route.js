import express from "express";
import { getNotifications } from "../controllers/notification.controller.js";
import { auth } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.get("/", auth, getNotifications);

export const notificationRouter = router;