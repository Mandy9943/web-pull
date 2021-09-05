import  ISquareTextAction  from '../types/SquareTesxtState/ISquareTextAction';
import  ISquareTextState  from '../types/SquareTesxtState/ISquareTextState';


const initialDisplayState: ISquareTextState = {
  squareTextDisplay:"none"
}


const squareTextDisplayReducer = (state: ISquareTextState = initialDisplayState, action: ISquareTextAction) => {
  switch (action.type) {
    case "CHANGE_SQUARETEXT_DISPLAY": {
      state.squareTextDisplay = action.payloadSTD;
      return {...state};
    }
    default: {
      return {...state};
    }
  }
}

export default squareTextDisplayReducer;


