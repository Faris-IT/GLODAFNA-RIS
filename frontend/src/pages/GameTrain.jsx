// src/pages/GameTrain.jsx
import React, { useEffect, useRef, useState } from 'react';
import './game-train.css';

/*
  Versi sederhana dari "Train of Thought"-like game.
  Data dummy ada di dalam komponen: masing-masing item berisi { id, indonesia, jawa, sunda }.
  Mode: pilih bahasa target (jawa / sunda).
*/

const DUMMY = [
  { id: 1, indonesia: 'Ibu', jawa: 'Ibu / Bunda', sunda: 'Indung' },
  { id: 2, indonesia: 'Ayah', jawa: 'Bapak', sunda: 'Bapa' },
  { id: 3, indonesia: 'Makan', jawa: 'Mangan', sunda: 'Dahar' },
  { id: 4, indonesia: 'Minum', jawa: 'Ngombe', sunda: 'Inum' },
  { id: 5, indonesia: 'Rumah', jawa: 'Omah', sunda: 'Imah' },
  { id: 6, indonesia: 'Sekolah', jawa: 'Sekolah', sunda: 'Sakola' },
  { id: 7, indonesia: 'Teman', jawa: 'Kanca', sunda: 'Batur' },
  { id: 8, indonesia: 'Cantik', jawa: 'Ayu', sunda: 'Geulis' },
  { id: 9, indonesia: 'Pergi', jawa: 'Lunga', sunda: 'Indit' },
  { id: 10, indonesia: 'Tidur', jawa: 'Turu', sunda: 'Saré' },
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createMovingCards(pool, lang, count, screenWidth) {
  const cards = [];
  const gap = Math.max(120, Math.floor(screenWidth / (count + 1)));
  for (let i = 0; i < count; i++) {
    const item = randomFrom(pool);
    const startX = screenWidth + i * gap + Math.floor(Math.random() * 180);
    cards.push({
      uid: `${item.id}-${Date.now()}-${i}`,
      item,
      lang,
      x: startX,
      w: 160,
      hit: false,
    });
  }
  return cards;
}

export default function GameTrain() {
  const [lang, setLang] = useState('jawa'); // target language: 'jawa' or 'sunda'
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [running, setRunning] = useState(false);
  const [target, setTarget] = useState(null);
  const [cards, setCards] = useState([]);
  const intervalRef = useRef(null);
  const speedRef = useRef(1.2); // base pixels per tick
  const containerRef = useRef(null);
  const [screenW, setScreenW] = useState(1000);

  useEffect(() => {
    const measure = () => {
      const w = containerRef.current?.clientWidth || window.innerWidth;
      setScreenW(w);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    pickNewTarget();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    if (!running) return;

    setCards(() =>
      createMovingCards(DUMMY, lang, 5 + Math.min(3, Math.floor(score / 10)), screenW)
    );

    intervalRef.current = setInterval(() => {
      setCards(prevCards => {
        const spd = speedRef.current + Math.min(2.5, score * 0.05); // speed scales with score
        const moved = prevCards.map(c => ({ ...c, x: c.x - spd }));

        // check missed correct cards and penalize lives if necessary
        let missedPenalty = 0;
        moved.forEach(c => {
          if (!c.hit && c.x + c.w < 0) {
            // if this card corresponds to the current target, penalize
            if (target && c.item.id === target.item.id) missedPenalty += 1;
          }
        });
        if (missedPenalty > 0) {
          setLives(l => Math.max(0, l - missedPenalty));
        }

        const alive = moved.filter(c => c.x + c.w > -50);
        if (alive.length < 3) {
          const more = createMovingCards(DUMMY, lang, 3, screenW);
          return [...alive, ...more];
        }
        return moved;
      });
    }, 30);

    return () => clearInterval(intervalRef.current);
  }, [running, score, screenW, target, lang]);

  useEffect(() => {
    if (lives <= 0) {
      setRunning(false);
    }
  }, [lives]);

  function startGame() {
    setScore(0);
    setLives(3);
    speedRef.current = 1.2;
    pickNewTarget();
    setRunning(true);
  }

  function pickNewTarget() {
    const t = randomFrom(DUMMY);
    setTarget({ item: t, match: t[lang] });
  }

  function onCardClick(cardUid) {
    setCards(prevCards => {
      const idx = prevCards.findIndex(c => c.uid === cardUid);
      if (idx === -1) return prevCards;
      const clicked = prevCards[idx];

      const matched = clicked.item.id === target?.item?.id;
      if (matched) {
        setScore(s => s + 5);
        speedRef.current += 0.08;
        setTimeout(() => pickNewTarget(), 220);
        const copy = [...prevCards];
        copy[idx] = { ...clicked, hit: true };
        return copy;
      } else {
        setLives(l => Math.max(0, l - 1));
        setScore(s => Math.max(0, s - 2));
        return prevCards;
      }
    });
  }

  function resetGame() {
    setRunning(false);
    setCards([]);
    setTarget(null);
    setScore(0);
    setLives(3);
  }

  return (
    <div className="game-train-page">
      <div className="game-header">
        <div className="brand">
          <h2>Train of Thought — (lite)</h2>
          <p className="desc">Klik kata terjemahan yang benar dari target.</p>
        </div>

        <div className="controls">
          <div className="lang-select">
            <label>Bahasa target: </label>
            <select value={lang} onChange={e => setLang(e.target.value)} disabled={running}>
              <option value="jawa">Jawa</option>
              <option value="sunda">Sunda</option>
            </select>
          </div>

          <div className="stats">
            <div>Score: <strong>{score}</strong></div>
            <div>Lives: <strong>{'❤'.repeat(lives) || '—'}</strong></div>
          </div>

          <div className="buttons">
            {!running ? (
              <button className="btn" onClick={startGame}>Mulai</button>
            ) : (
              <button className="btn btn-stop" onClick={() => setRunning(false)}>Pause</button>
            )}
            <button className="btn btn-reset" onClick={resetGame}>Reset</button>
          </div>
        </div>
      </div>

      <div className="target-area">
        <div className="target-card">
          <div className="label">Target (Indonesia)</div>
          <div className="target-word">{target ? target.item.indonesia : '-'}</div>
        </div>

        <div className="hint">
          Pilih terjemahan dalam <strong>{lang.toUpperCase()}</strong>
        </div>
      </div>

      <div className="track" ref={containerRef}>
        {cards.map(c => (
          <div
            key={c.uid}
            className={`card ${c.hit ? 'hit' : ''}`}
            onClick={() => onCardClick(c.uid)}
            style={{
              transform: `translateX(${c.x}px)`,
              transition: 'transform 30ms linear',
            }}
          >
            <div className="card-text">{c.item[lang]}</div>
            <div className="card-sub">{c.item.indonesia}</div>
          </div>
        ))}
        {!running && (
          <div className="overlay-info">
            {!target ? <p>Tekan <strong>Mulai</strong> untuk bermain</p> : <p>Game Paused</p>}
          </div>
        )}
        {lives <= 0 && (
          <div className="game-over">
            <h3>Game Over</h3>
            <p>Score akhir: {score}</p>
            <button className="btn" onClick={startGame}>Main Lagi</button>
          </div>
        )}
      </div>

      <div className="bottom-help">
        <small>Catatan: ini versi sederhana dengan data dummy. Nanti bisa connect ke DB dan tambah lebih banyak kata / audio.</small>
      </div>
    </div>
  );
}
