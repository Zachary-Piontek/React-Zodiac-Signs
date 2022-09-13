import React from 'react';

export default function ZodiacSign(props) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/zodiac/${props.name}.png`} alt={props.symbol}/>
      <span>{props.name}</span>
      <span>{props.dates}</span>
      <span>{props.symbol}</span>
    </div>
  );
}