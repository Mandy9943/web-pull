import  IOptionAction  from '../types/OptionState/IOptionAction';
import  IOptionState  from '../types/OptionState/IOptionState';


const initialDisplayState: IOptionState = {
  divJustifyContent: "center",
  buttonJustifyContent: "center",
  pDisplay: "inline",
  divDisplay: "none",
}


const optionDisplayReducer = (state: IOptionState = initialDisplayState, action: IOptionAction) => {
  switch (action.type) {
    case "CHANGE_DISPLAY": {
      state.divJustifyContent = action.payloadDJC;
      state.buttonJustifyContent = action.payloadBJC;
      state.divDisplay = action.payloadDD;
      state.pDisplay = action.payloadPD;
      return {...state};
    }
    default: {
      return {...state};
    }
  }
}

export default optionDisplayReducer;


