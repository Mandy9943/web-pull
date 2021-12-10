import React from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import {
  ModaCloseButtonS,
  ModalBackDropS,
  ModalContentS,
  ModalHeadS,
  ModalS,
  ModalTitleS,
} from "./Modal.style";
import closeIcon from "../../../../../assets/images/icon-close.svg";
import { config, useSpring } from "react-spring";

interface IProps {
  children?: React.ReactNode;
  title?: string;
  onClose: () => void;
}

const Modal = ({ children, title = "", onClose }: IProps) => {
  const ref = useOnclickOutside(() => {
    onClose();
  });

  const props = useSpring({
    to: { opacity: 1, x: 0, y: 0 },
    from: { opacity: 0, x: 100, y: -100 },
    delay: 50,
    config: config.molasses,
  });
  return (
    <ModalBackDropS>
      <ModalS ref={ref} style={props}>
        <ModalHeadS>
          <ModalTitleS>{title}</ModalTitleS>
          <ModaCloseButtonS onClick={onClose}>
            <img src={closeIcon} alt="Close Icon" />
          </ModaCloseButtonS>
        </ModalHeadS>
        <ModalContentS>{children}</ModalContentS>
      </ModalS>
    </ModalBackDropS>
  );
};

export default Modal;
