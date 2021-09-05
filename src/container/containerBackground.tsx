import React from "react";
import styled from "styled-components";
import Option from "./containerOption";
import AuxComponent from "../components/auxComponent";
import Ask from "../components/ComponentAsk/AskComponent";

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
          <Ask ask="Quien es el mejor jugador?" />
        </div>
        <div>
          <Option option="Griezmann" percent={68} />
        </div>
        <div>
          <Option option="Mbappe" percent={32} />
        </div>
        <div>
          <AuxComponent />
        </div>
      </DivBackground>
    </div>
  );
};

export default Background;
