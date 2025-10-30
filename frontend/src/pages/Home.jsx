import React from "react";
import { Link } from "react-router-dom";
import sundaMap from "../assets/sunda-map.png";
import jawaMap from "../assets/jawa-map.png";
import GlassWrapper from "../components/GlassWrapper";

export default function Home() {
  return (
    <div
      className="home-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        // margin: "30px 0 auto auto",
        alignItems: "center", // Ini untuk menengahkan secara horizontal
        // justifyContent: "center", // Dihapus agar tidak ke tengah vertikal
        // padding: "80px 20px 40px 20px", // Ditambah padding atas agar tidak mentok
        background: "linear-gradient(120deg, #e6f2ef, #f7e9f1)",
        // backgroundSize: "200% 200%",
        animation: "gradientFlow 14s ease infinite",
      }}
    >
      {/* ===== MAIN GLASS CONTAINER (WRAPPER UTAMA) ===== */}
      <GlassWrapper
        className="main-card"
        style={{
          width: "100%",
          maxWidth: "1000px",
          padding: "40px 50px", // Padding disesuaikan
          borderRadius: "24px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          color: "#165c44",
        }}
      >
        {/* ===== HERO SECTION (Teks Utama) ===== */}
        <div className="hero-text" style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "700", fontSize: "2rem", margin: 0 }}>
            Mau Belajar Bahasa Daerah Apa Hari Ini?
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#185a3d",
              marginTop: "10px",
              marginBottom: "40px", // Jarak ke kartu bahasa
            }}
          >
            Jelajahi kekayaan budaya Indonesia melalui belajar bahasa daerah.
          </p>
        </div>

        {/* ===== LANGUAGE SELECTION (DIMASUKKAN KE DALAM) ===== */}
        <div
          className="language-options"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            width: "100%",
          }}
        >
          {/* Bahasa Sunda (Diganti dari GlassWrapper ke div) */}
          <div
            className="lang-card"
            style={{
              width: "300px",
              textAlign: "center",
              padding: "20px",
              borderRadius: "20px",
              transition: "all 0.3s ease",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
            }}
          >
            <img
              src={sundaMap}
              alt="Peta Jawa Barat"
              className="lang-map"
              style={{
                width: "100%",
                borderRadius: "14px",
                marginBottom: "15px",
              }}
            />
            <h3 style={{ color: "#165c44", marginBottom: "8px" }}>
              BAHASA SUNDA
            </h3>
            <p style={{ marginBottom: "15px", color: "#333" }}>
              Bahasa dari tanah Pasundan yang indah.
            </p>
            <Link
              to="/language/sunda"
              className="btn"
              style={{
                background: "linear-gradient(90deg, #43a047, #2e7d32)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Mulai Belajar
            </Link>
          </div>

          {/* Bahasa Jawa (Diganti dari GlassWrapper ke div) */}
          <div
            className="lang-card"
            style={{
              width: "300px",
              textAlign: "center",
              padding: "20px",
              borderRadius: "20px",
              transition: "all 0.3s ease",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
            }}
          >
            <img
              src={jawaMap}
              alt="Peta Jawa Tengah & Timur"
              className="lang-map"
              style={{
                width: "100%",
                borderRadius: "14px",
                marginBottom: "15px",
              }}
            />
            <h3 style={{ color: "#165c44", marginBottom: "8px" }}>
              BAHASA JAWA
            </h3>
            <p style={{ marginBottom: "15px", color: "#333" }}>
              Bahasa dengan tingkatan yang kaya budaya.
            </p>
            <Link
              to="/language/jawa"
              className="btn"
              style={{
                background: "linear-gradient(90deg, #43a047, #2e7d32)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Mulai Belajar
            </Link>
          </div>
        </div>
      </GlassWrapper>
    </div>
  );
}