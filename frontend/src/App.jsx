// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import LanguagePage from './pages/LanguagePage';
import Translator from './pages/Translator';
import GameTrain from './pages/GameTrain';

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/language/:lang" element={<LanguagePage />} />
          <Route path="/translator/:lang" element={<Translator />} />
          <Route path="/game-train" element={<GameTrain />} />
        </Routes>
      </main>
    </div>
  );
}
