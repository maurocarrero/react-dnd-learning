import React from 'react';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import { moveKnight } from '../game';

const BOARD_SIDE = 600;

function handleSquareClick(toX, toY) {
  moveKnight(toX, toY);
};

const renderPiece = (x, y, [knightX, knightY]) =>
  knightX === x && knightY === y ? <Knight /> : null;

const renderSquare = (i, knightPosition) => {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}
      onClick={() => handleSquareClick(x, y)}
    >
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
};

const Board = ({ knightPosition }) => {
  const squares = [];
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare(i, knightPosition));
  }

  /**
   * WRAP COMPONENT ROOT WITH CONTEXT PROVIDER
   */
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
};

export default Board;