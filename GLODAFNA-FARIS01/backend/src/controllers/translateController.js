import { translateToIndo } from "../services/openlService.js";

export const translateWord = async (req, res) => {
  const { word } = req.body;

  if (!word) return res.status(400).json({ error: "Kata tidak boleh kosong" });

  const translated = await translateToIndo(word);
  res.json({
    original: word,
    translated,
  });
};
