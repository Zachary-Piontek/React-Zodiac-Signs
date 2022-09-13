import React from 'react';

export default function ZodiacSign(props) {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.dates}</span>
      <span>{props.symbol}</span>
    </div>
  );
}