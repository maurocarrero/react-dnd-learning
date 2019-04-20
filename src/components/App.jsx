import React from 'react';
import {
  StyledDropTargetBox,
  StyledUl,
  StyledLi,
  StyledSpan,
  StyledWrapper
} from './Styled';
import { DragSource } from 'react-dnd';

// Set Item Types
const ItemTypes = {
  Name: 'Name'
};

// Define Drag Source component.
const Name = ({ children }) => <StyledLi>{children}</StyledLi>;
const sourceSpec = {
  beginDrag: () => ({})
};
const collectFn = () => ({});
const NameDragSource = DragSource(ItemTypes.Name, sourceSpec, collectFn)(Name);

const App = () => {
  return (
    <StyledWrapper>
      <StyledDropTargetBox>
        <StyledSpan>Drag a name here.</StyledSpan>
      </StyledDropTargetBox>
      <StyledUl>
        <NameDragSource>Lucas</NameDragSource>
        <NameDragSource>Ignacio</NameDragSource>
        <NameDragSource>Facundo</NameDragSource>
      </StyledUl>
    </StyledWrapper>
  );
};

export default App;
