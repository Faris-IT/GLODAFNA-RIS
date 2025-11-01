import express from "express";
import { translateWord } from "../controllers/translateController.js";

const router = express.Router();

// POST /api/translate
router.post("/", translateWord);

export default router;
