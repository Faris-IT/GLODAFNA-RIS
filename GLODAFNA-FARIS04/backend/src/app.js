import express from "express";
import cors from "cors";
import translateRoutes from "./routes/translateRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// route testing openl.io
app.use("/api/translate", translateRoutes);

app.get("/", (req, res) => res.send("GLODAFNA API ready 🚀"));

export default app;
