import { animated } from "react-spring";
import styled from "styled-components";

export const ModalBackDropS = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ModalS = styled(animated.div)`
  padding: 25px;
  background-color: white;
  border-radius: 5px;
  cursor: auto;
`;
export const ModalHeadS = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ModalTitleS = styled.h3`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: var(--Dark_Text);
`;
export const ModaCloseButtonS = styled.span`
  height: 15px;
  cursor: pointer;

  :hover {
    transform: scale(110%);
  }
`;
export const ModalContentS = styled.div`
  padding-top: 25px;
`;
