import  styled  from 'styled-components';
import React from 'react';

interface IProps {
  ask: string
}

const Ask = (props: IProps) => {
  const H3Ask = styled.h3`
  color: rgba(255, 255, 255, 0.788);
  width: 100%;
  text-align: center;
  font-size: 70px;
  -webkit-text-stroke: 2px white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  `;
  return (
    <div>
      <H3Ask>{props.ask}</H3Ask>
    </div>
  );
}

export default Ask;




