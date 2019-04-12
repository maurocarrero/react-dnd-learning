import React from 'react'

/**
 * DragSource HoC
 * Convert a component in a drag source
 */
import { DragSource } from 'react-dnd';
// ITEM TYPE
import { ItemTypes } from '../constants';

// SOURCE SPECIFICATION object.
const knightSource = {
  beginDrag(props) {
    return {};
  }
};

// COLLECTING FUNCTION
const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

const Knight = ({
  connectDragSource,
  isDragging
}) => 
  connectDragSource(
    <span style={{
      opacity: isDragging ? .5 : 1,
      fontSize: '300%'
    }}>♘</span>
  );


// Wrap the Knight component, passing the ITEM TYPE,
// the SOURCE SPECIFICATION and the COLLECTING FUNCTION.
export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
