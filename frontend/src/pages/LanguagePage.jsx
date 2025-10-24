// src/pages/LanguagePage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function FeatureCard({title, subtitle, to}) {
  return (
    <Link to={to} className="feature-card">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </Link>
  );
}

export default function LanguagePage(){
  const { lang } = useParams();
  const title = lang === 'sunda' ? 'Fitur Pembelajaran Sunda' : 'Fitur Pembelajaran Jawa';

  return (
    <section className="language-page">
      <h2 className="page-title">{title}</h2>
      <div className="back">
        <Link to="/">&larr; Kembali ke beranda</Link>
      </div>

      <div className="features-grid">
        <FeatureCard title="Translator" subtitle="Terjemahkan kata & kalimat" to={`/translator/${lang}`} />
        <FeatureCard title="Quiz" subtitle="Uji kemampuan bahasa anda" to={`/`} />
        <FeatureCard title="Kosakata" subtitle="Pelajari kata-kata baru" to={`/`} />
        <FeatureCard title="Games" subtitle="Belajar sambil bermain" to={`/`} />
      </div>
    </section>
  );
}
