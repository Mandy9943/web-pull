import Commentary from "../container/containerCommentary";
import SquareText from "../container/containerSquareText";
import changeSquareTextDisplay from "../redux/actions/squareTextAction";
import { IApplicationState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

/* Deberia posicionarse la etiqueta Commentary sobre SquareText */

const AuxComponent = () => {
  const displaySquareText = useSelector<
    IApplicationState,
    IApplicationState["squareTextDisplay"]["squareTextDisplay"]
  >((state) => state.squareTextDisplay.squareTextDisplay);
  const dispatch = useDispatch();

  const activeSquareText = () => {
    if (displaySquareText === "none") {
      dispatch(changeSquareTextDisplay("block"));
    } else {
      dispatch(changeSquareTextDisplay("none"));
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div>
        <Commentary activeSquareText={activeSquareText} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <SquareText
          squareDisplay={displaySquareText}
          activeSquareText={activeSquareText}
        />
      </div>
    </div>
  );
};
export default AuxComponent;
