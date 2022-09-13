import React from 'react';
import { zodiac } from '../../data.js';
import ZodiacSign from '../Card/Card.js';
import '../Main.js/main.css';
import background from '../../zodiac-background.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((signs) => (
        <ZodiacSign
          key={signs.id}
          name={signs.name}
          dates={signs.dates}
          symbol={signs.symbol}
        />
      ))}
    </main>
  );
}