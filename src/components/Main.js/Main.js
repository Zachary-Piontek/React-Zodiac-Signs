import React from 'react';
import { zodiac } from '../../data.js';
import ZodiacSign from '../Card/Card.js';



export default function Main() {
  return (
    <main>
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