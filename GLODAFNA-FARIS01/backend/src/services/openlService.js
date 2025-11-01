import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const translateToIndo = async (text) => {
  try {
    const options = {
      method: "POST",
      url: "https://openl-translate.p.rapidapi.com/translate/bulk",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "openl-translate.p.rapidapi.com",
        "x-rapidapi-key": process.env.OPENL_API_KEY,
      },
      data: {
        target_lang: "id",
        text: [text],
      },
    };

    const response = await axios.request(options);

    // 👇 Tambahkan log untuk melihat struktur data yang dikembalikan
    console.log("🔍 Response dari RapidAPI:");
    console.log(JSON.stringify(response.data, null, 2));

    const translated =
      response.data?.translations?.[0] ||
      response.data?.data?.[0]?.translated_text ||
      "Terjemahan tidak ditemukan";

    return translated;
  } catch (error) {
    console.error("❌ Gagal translate:", error.response?.data || error.message);
    return "Terjemahan gagal";
  }
};
