import React from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './constants';

const ItemDropTarget = ({ connectDropTarget, isOver }) =>
  connectDropTarget(
    <div
      style={{
        backgroundColor: isOver ? 'green' : 'red'
      }}
    >
      <span>
        {isOver ? 'Item is over the target' : 'Item is outside the target'}
      </span>
    </div>
  );

const targetSpec = {
  drop: () => {}
};

const targetCollectFn = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

export default DropTarget(ItemTypes.Item, targetSpec, targetCollectFn)(
  ItemDropTarget
);
