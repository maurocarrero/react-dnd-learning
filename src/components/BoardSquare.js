import React from 'react';
import Square from './Square';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../constants';
import { canMoveKnight, moveKnight } from '../game';

// DROP TARGET SPECIFICATION
const squareTarget = {
  drop(props) {
    moveKnight(props.x, props.y);
  },
  canDrop(props) {
    return canMoveKnight(props.x, props.y);
  }
}

const renderOverlay = (color) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: 1,
      opacity: 0.5,
      backgroundColor: color,
    }}
/>
);

const BoardSquare = ({ x, y, children, canDrop, connectDropTarget, isOver }) => {
  const black = (x + y) % 2 === 1;
  return connectDropTarget(
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && renderOverlay('#E60F1B')}
      {!isOver && canDrop && renderOverlay('#F6E82F')}
      {isOver && canDrop && renderOverlay('#01f804')}
    </div> 
  );
}

const collect = (connect, monitor) => ({
  canDrop: monitor.canDrop(),
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);