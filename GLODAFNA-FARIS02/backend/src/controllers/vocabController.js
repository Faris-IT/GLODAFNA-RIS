import { Vocab } from "../models/vocabModel.js";

// ✅ GET semua vocab
export const getAllVocab = async (req, res) => {
  try {
    const data = await Vocab.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil data", error });
  }
};

// ✅ POST tambah vocab baru
export const createVocab = async (req, res) => {
  try {
    const { word, translation, language, category, example_sentence } = req.body;

    const newVocab = await Vocab.create({
      word,
      translation,
      language,
      category,
      example_sentence,
    });

    res.json({ message: "Vocab berhasil ditambahkan", data: newVocab });
  } catch (error) {
    res.status(500).json({ message: "Gagal menambah vocab", error });
  }
};

// ✅ PUT update vocab
export const updateVocab = async (req, res) => {
  try {
    const { id } = req.params;

    await Vocab.update(req.body, { where: { id } });

    res.json({ message: "Vocab berhasil diupdate" });
  } catch (error) {
    res.status(500).json({ message: "Gagal update vocab", error });
  }
};

// ✅ DELETE hapus vocab
export const deleteVocab = async (req, res) => {
  try {
    const { id } = req.params;

    await Vocab.destroy({ where: { id } });

    res.json({ message: "Vocab berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal hapus vocab", error });
  }
};
