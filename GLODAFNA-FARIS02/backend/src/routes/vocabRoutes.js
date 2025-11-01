import express from "express";
import {
  getAllVocab,
  createVocab,
  updateVocab,
  deleteVocab
} from "../controllers/vocabController.js";

const router = express.Router();

router.get("/", getAllVocab);
router.post("/", createVocab);
router.put("/:id", updateVocab);
router.delete("/:id", deleteVocab);

export default router;
