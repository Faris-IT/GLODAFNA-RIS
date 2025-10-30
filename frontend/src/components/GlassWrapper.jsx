import React from "react";
import LiquidGlass from "liquid-glass-react";
// import "./GlassWrapper.css";

export default function GlassWrapper({ children, style = {}, className = "" }) {
  return (
    <LiquidGlass
      displacementScale={25}       // lebih ringan agar tidak terlalu "cair"
      blurAmount={0.05}            // blur sangat halus
      saturation={100}             // biar warna tetap natural
      aberrationIntensity={0.5}    // efek cahaya minimal
      elasticity={0.25}            // tidak terlalu melenting
      cornerRadius={16}
      padding="24px"
      className={`glass-wrapper ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.3)", // lebih cerah & lembut
        border: "1px solid rgba(255, 255, 255, 0.5)",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(8px)", // menambah efek kaca asli
        ...style,
      }}
    >
      {children}
    </LiquidGlass>
  );
}
