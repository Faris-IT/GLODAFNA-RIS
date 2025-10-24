import React from "react";
import { Link } from "react-router-dom";
import sundaMap from "../assets/sunda-map.png";
import jawaMap from "../assets/jawa-map.png";
import { Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="home-page">
      {/* ===== MAIN CONTENT ===== */}
      <main className="home-main glass">
        <h2 className="main-title">Mau Belajar Bahasa Daerah Apa Hari Ini?</h2>
        <p className="main-subtitle">
          Jelajahi kekayaan budaya Indonesia melalui belajar bahasa daerah
        </p>

        <div className="language-options">
          {/* Bahasa Sunda */}
          <div className="lang-card">
            <img src={sundaMap} alt="Peta Jawa Barat" className="lang-map" />
            <h3>BAHASA SUNDA</h3>
            <p>Bahasa dari tanah Pasundan yang indah</p>
            <Link to="/language/sunda" className="btn">Mulai Belajar</Link>
          </div>

          {/* Bahasa Jawa */}
          <div className="lang-card">
            <img src={jawaMap} alt="Peta Jawa Tengah & Timur" className="lang-map" />
            <h3>BAHASA JAWA</h3>
            <p>Bahasa dengan tingkatan yang kaya budaya</p>
            <Link to="/language/jawa" className="btn">Mulai Belajar</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
