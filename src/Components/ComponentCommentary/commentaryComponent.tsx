import React from 'react';
import styled from 'styled-components';

interface IProps{
  activeSquareText: () => void;
}

const Commentary = (props:IProps) => {
  const ButtonCommentary = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0.788);
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.788);
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  &:hover{
    -webkit-text-stroke: 2px rgba(63, 60, 60, 0.815);
    transition: 0.5s;
  }

  `;
  return (
    <div>
      <ButtonCommentary onClick={props.activeSquareText}>Presione para hacer un comentario</ButtonCommentary>
    </div>
  );
}


export default Commentary;