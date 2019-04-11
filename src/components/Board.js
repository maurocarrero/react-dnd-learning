import React from 'react'
import Square from './Square'
import Knight from './Knight'
import { moveKnight } from '../game';

const BOARD_SIDE = 600;

function handleSquareClick(toX, toY) {
  moveKnight(toX, toY);
};

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}
      onClick={() => handleSquareClick(x, y)}
    >
      <Square black={black}>{piece}</Square>
    </div>
  )
}

export default function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <div
      style={{
        border: '2px solid #343434',
        width: `${BOARD_SIDE}px`,
        height: `${BOARD_SIDE}px`,
        display: 'flex',
        flexWrap: 'wrap'
      }}>
      {squares}
    </div>
  )
}