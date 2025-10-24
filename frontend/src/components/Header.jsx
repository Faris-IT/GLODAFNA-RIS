// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import trophy from '../assets/placeholder-trophy.png';

export default function Header(){
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <h1>Glodafna</h1>
          <p className="tagline">Belajar Bahasa Daerah</p>
        </div>
        <nav className="nav">
          <Link to="/">home</Link>
          <Link to="#">about</Link>
        </nav>
        <div className="points">
          <img src={trophy} alt="trophy" className="trophy" />
          <span>Poin :</span>
        </div>
      </div>
      <hr className="header-divider" />
    </header>
  );
}
