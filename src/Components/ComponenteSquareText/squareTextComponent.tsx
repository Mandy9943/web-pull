import { useState } from 'react';
import styled from 'styled-components';
import React, { FormEvent } from 'react';
import CloseIcon from '@material-ui/icons/Close';


interface IProps {
  squareDisplay: string;
  activeSquareText: () => void;
  enviarDatos: (event:any) => void;
  handleInputChange: (event:any) => void;
}

const SquareText = (props: IProps) => {
  

  const Textarea = styled.textarea`
  width: 800px;
  height: 50px;
  font-size: 15px;
  padding: 3px 10px;
  margin-botton:0px;
  `;

  const ButtonSendCommentary = styled.button`
  border: none;
  height: 30px;
  font-size: 20px;
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
  box-shadow: none;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serifS;

  &:hover{
    transition:0.5s;
    background-color:#312b2a;
  }
  `;

  const ButtonClose = styled(ButtonSendCommentary)`
  `;

  
  return (
    <div style={{display: `${props.squareDisplay}`}}>
      <form onSubmit={props.enviarDatos} >
        <textarea placeholder="Escriba un comentario  " onChange={props.handleInputChange} rows={5}  cols={100} name="nombre"></textarea>
        <div style={{display:"flex",justifyContent:"center"}}>
          <ButtonSendCommentary style={{width:"785px"}} type="submit">Enviar</ButtonSendCommentary>
          <ButtonClose style={{ width: "40px" }} onClick={props.activeSquareText}><CloseIcon ></CloseIcon></ButtonClose>
        </div>
      </form>
    </div>
  );
}


export default SquareText;
