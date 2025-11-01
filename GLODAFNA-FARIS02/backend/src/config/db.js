import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,  // nama database
  process.env.DB_USER,  // user (root)
  process.env.DB_PASS,  // password (kosong kalau XAMPP)
  {
    host: process.env.DB_HOST, // biasanya localhost
    dialect: "mysql",
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL connected successfully!");
  } catch (error) {
    console.error("❌ MySQL connection failed:", error.message);
  }
};
