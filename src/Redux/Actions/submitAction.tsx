import ISubmitAction from '../types/SubmitState/ISubmitAction';


const changeSubmitMessage = (message:string): ISubmitAction => ({
  type: "CHANGE_MESSAGE",
  payloadS: message
});

export default changeSubmitMessage;
