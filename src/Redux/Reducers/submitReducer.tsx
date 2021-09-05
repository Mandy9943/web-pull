import ISubmitAction from "../types/SubmitState/ISubmitAction";
import ISubmitState from "../types/SubmitState/ISubmitState";

const initialSubmitState: ISubmitState = {
  message: "",
};

const submitReducer = (
  state: ISubmitState = initialSubmitState,
  action: ISubmitAction
) => {
  switch (action.type) {
    case "CHANGE_MESSAGE": {
      state.message = action.payloadS;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default submitReducer;
