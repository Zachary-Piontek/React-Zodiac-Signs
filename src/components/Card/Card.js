import React from 'react';
import '../Card/card.css';

export default function ZodiacSign(props) {
  return (
    <div className='card'>
      <img src={`${process.env.PUBLIC_URL}/zodiac/${props.name}.png`} alt={props.symbol}/>
      <span>{props.name}</span>
      <span>{props.dates}</span>
      <span>{props.symbol}</span>
    </div>
  );
}