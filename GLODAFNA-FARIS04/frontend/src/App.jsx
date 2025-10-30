import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!word.trim()) return;
    setLoading(true);
    setTranslated("");

    try {
      const res = await fetch("http://localhost:5000/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word }),
      });
      const data = await res.json();
      setTranslated(data.translated || "Gagal menerjemahkan");
    } catch (err) {
      console.error(err);
      setTranslated("Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">🌏 GLODAFNA Translator</h1>

        <input
          type="text"
          placeholder="Masukkan kata (Jawa/Sunda)"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <button
          onClick={handleTranslate}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          {loading ? "Menerjemahkan..." : "Terjemahkan"}
        </button>

        {translated && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
            <p><strong>Hasil:</strong> {translated}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
