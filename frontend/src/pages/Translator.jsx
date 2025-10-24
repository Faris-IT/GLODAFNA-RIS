// src/pages/Translator.jsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Translator(){
  const { lang } = useParams();
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  function handleTranslate(){
    // Placeholder: ganti dengan panggilan API backend
    setResult(`(placeholder terjemahan untuk "${input}" ke ${lang})`);
  }

  return (
    <section className="translator-page">
      <h2 className="page-title">Translator</h2>
      <div className="back"><Link to={`/language/${lang}`}>&larr; Kembali ke fitur</Link></div>

      <div className="translator-box">
        <div className="box left">
          <h4>Bahasa Indonesia</h4>
          <textarea placeholder="Masukkan teks yang ingin diterjemahkan" value={input} onChange={e=>setInput(e.target.value)} />
        </div>

        <div className="box right">
          <h4>Bahasa {lang}</h4>
          <div className="result">
            {result || <span className="hint">Hasil Terjemahan akan muncul disini</span>}
          </div>
        </div>
      </div>

      <div className="translator-actions">
        <button className="btn" onClick={handleTranslate}>Terjemahkan</button>
      </div>
    </section>
  );
}
