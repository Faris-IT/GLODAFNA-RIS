import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import userRoutes from "./src/routes/userRoutes.js";
import vocabRoutes from "./src/routes/vocabRoutes.js";
import translateRoutes from "./src/routes/translateRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/vocab", vocabRoutes);
app.use("/api/translate", translateRoutes);

app.get("/", (req, res) => res.send("GLODAFNA API ready 🚀"));

const PORT = process.env.PORT || 5000;

// Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
