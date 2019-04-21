import React from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './constants';

const ItemDragSource = ({ children, connectDragSource }) =>
  connectDragSource(<li>{children}</li>);

const sourceSpec = {
  beginDrag: () => ({})
};

const sourceCollectFn = connect => ({
  connectDragSource: connect.dragSource()
});

export default DragSource(ItemTypes.Item, sourceSpec, sourceCollectFn)(
  ItemDragSource
);
