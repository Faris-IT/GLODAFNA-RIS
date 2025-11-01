import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Vocab = sequelize.define("Vocab", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  word: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  translation: {
    type: DataTypes.STRING,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  example_sentence: {
    type: DataTypes.TEXT,
  },
});
