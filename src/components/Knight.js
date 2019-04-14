import React, { Component } from 'react';
import images from './images.json';

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
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
});

class Knight extends Component {
  componentDidMount() {
    const img = new Image();
    img.src = `data:image/png;base64,${images.horse}`;
    img.onload = () => this.props.connectDragPreview(img);
  }

  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <span style={{
        opacity: isDragging ? .5 : 1,
        fontSize: '300%'
      }}>♘</span>
    );
  }
}

// Wrap the Knight component, passing the ITEM TYPE,
// the SOURCE SPECIFICATION and the COLLECTING FUNCTION.
export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
