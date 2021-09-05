import SquareText from "../components/ComponenteSquareText/SquareTextComponent";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IApplicationState } from "../redux/store";
import changeSubmitMessage from "../redux/actions/submitAction";

interface IProps {
  squareDisplay: string;
  activeSquareText: () => void;
}

const ContainerSquareText = (props: IProps) => {
  const message = useSelector<
    IApplicationState,
    IApplicationState["message"]["message"]
  >((state) => state.message.message);
  const dispatch = useDispatch();

  const enviarDatos = (event: any) => {
    event.preventDefault();
    console.log("enviando datos..." + message);
  };

  const handleInputChange = (event: any) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    dispatch(changeSubmitMessage(event.target.value));
  };
  return (
    <div>
      <SquareText
        squareDisplay={props.squareDisplay}
        activeSquareText={props.activeSquareText}
        enviarDatos={enviarDatos}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default ContainerSquareText;
