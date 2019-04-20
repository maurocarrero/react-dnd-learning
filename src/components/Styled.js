import styled from 'styled-components';

export const StyledWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const StyledDropTargetBox = styled.div`
  background: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 400px;
`;

export const StyledSpan = styled.span`
  display: flex;
`;

export const StyledUl = styled.ul`
  background: cornflowerblue;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  list-style-type: none;
  justify-content: space-between;
  width: 200px;
  height: 200px;
`;

export const StyledLi = styled.li`
  border: 1px solid darkblue;
  border-radius: 4px;
  background-color: tan;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
`;
