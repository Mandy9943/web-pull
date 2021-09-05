import IOptionAction from '../types/OptionState/IOptionAction';


const changeDisplay = (djc: string, bjc: string, pd: string, dd: string): IOptionAction => ({
  type: "CHANGE_DISPLAY",
  payloadDJC: djc,
  payloadBJC: bjc,
  payloadDD: dd,
  payloadPD:pd
});

export default changeDisplay;
