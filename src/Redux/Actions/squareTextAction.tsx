import ISquareTextAction from '../types/SquareTesxtState/ISquareTextAction';


const changeSquareTextDisplay = (std:string): ISquareTextAction => ({
  type: "CHANGE_SQUARETEXT_DISPLAY",
  payloadSTD: std
});

export default changeSquareTextDisplay;
