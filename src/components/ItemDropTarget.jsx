import React from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './constants';

const ItemDropTarget = ({ connectDropTarget, canDrop, isOver }) =>
  connectDropTarget(
    <div
      style={{
        backgroundColor: isOver ? 'green' : 'red'
      }}
    >
      <span>
        {isOver ? 'Item is over the target' : 'Item is outside the target'}
      </span>
      <span>{canDrop ? 'Item can be dropped' : 'Item cannot be dropped'}</span>
    </div>
  );

const targetSpec = {
  drop: (_, monitor) => {
    console.log('Item was dropped', monitor.getItem()); // The item is the one returned by Source.
  },
  canDrop: (_, monitor) => {
    return monitor.isOver();
  }
};

const targetCollectFn = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
});

export default DropTarget(ItemTypes.Item, targetSpec, targetCollectFn)(
  ItemDropTarget
);
