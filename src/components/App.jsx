import React from 'react';
import {
  StyledDropTargetBox,
  StyledUl,
  StyledLi,
  StyledSpan,
  StyledWrapper
} from './Styled';

const App = () => {
  return (
    <StyledWrapper>
      <StyledDropTargetBox>
        <StyledSpan>Drag a name here.</StyledSpan>
      </StyledDropTargetBox>
      <StyledUl>
        <StyledLi>Lucas</StyledLi>
        <StyledLi>Ignacio</StyledLi>
        <StyledLi>Facundo</StyledLi>
      </StyledUl>
    </StyledWrapper>
  );
};

export default App;
