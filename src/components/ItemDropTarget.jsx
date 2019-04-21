import React from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './constants';

const ItemDropTarget = ({ connectDropTarget }) =>
  connectDropTarget(
    <div>
      <span>Drag an Item here.</span>
    </div>
  );

const targetSpec = {
  drop: () => {}
};

const targetCollectFn = connect => ({
  connectDropTarget: connect.dropTarget()
});

export default DropTarget(ItemTypes.Item, targetSpec, targetCollectFn)(
  ItemDropTarget
);
