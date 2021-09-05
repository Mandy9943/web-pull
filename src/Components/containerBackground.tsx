import React from 'react'
import styled from 'styled-components';
import AskTitle from './ComponentAsk/askComponent';
import Option from './ComponenteOption/containerOption';
import Commentary from './ComponentCommentary/commentaryComponent';
import AuxComponent from './auxComponent';

const Background = () => {
  const DivBackground = styled.div`
  background-color: rgb(68, 145, 207);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  `;
  return (
    <div>
      <DivBackground>
        <div>
          <AskTitle
            ask="Quien es el mejor jugador?"
          />
        </div>
        <div>
          <Option
            option="Griezmann"
            percent={68}
          />
        </div>
        <div>
          <Option
            option="Mbappe"
            percent={32}
          />
        </div>
        <div>
          <AuxComponent/>
        </div>
      </DivBackground>
    </div>
  );
}

export default Background;