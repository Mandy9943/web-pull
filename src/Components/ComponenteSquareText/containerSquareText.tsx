import SquareText from './squareTextComponent';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../Redux/store';
import submitAction from '../../Redux/Actions/submitAction';

interface IProps{
  squareDisplay: string;
  activeSquareText: () => void;
}

const ContainerSquareText = (props: IProps) => {
  
  const message = useSelector<IApplicationState, IApplicationState["message"]["message"]>((state) => state.message.message);
  const dispatch = useDispatch();

  const enviarDatos = (event:any) => {
    event.preventDefault()
    console.log('enviando datos...' + message);
  }
  
  const handleInputChange = (event:any) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    dispatch(submitAction(event.target.value));
   
}
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
}

export default ContainerSquareText;