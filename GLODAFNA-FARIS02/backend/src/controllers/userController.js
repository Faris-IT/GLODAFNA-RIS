import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret123";

// 🔹 Register
export const registerUser = async (req, res) => {
  try {
    const { username, password, selected_language, level } = req.body;

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) return res.status(400).json({ message: "Username sudah digunakan" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashed,
      selected_language,
      level,
    });

    res.json({ message: "Registrasi berhasil", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Gagal registrasi", error: error.message });
  }
};

// 🔹 Login
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Password salah" });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });

    res.json({
      message: "Login sukses",
      token,
      user: {
        username: user.username,
        selected_language: user.selected_language,
        level: user.level,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Gagal login", error: error.message });
  }
};
