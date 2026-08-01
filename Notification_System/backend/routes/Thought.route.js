import express from "express";
import { createThought, deleteThought, getAllThought, getThoughtById, updateThought } from "../controllers/thought.controller.js";
import { auth } from './../middleware/AuthMiddleware.js';

const router = express.Router();

router.post("/create", auth, createThought);

router.get("/", getAllThought);
router.get("/:id", getThoughtById);
router.patch("/:id", auth, updateThought);
router.delete("/:id", auth, deleteThought);

export const thoughtRouter = router;