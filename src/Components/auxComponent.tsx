
import Commentary from './ComponentCommentary/containerCommentary';
import SquareText from './ComponenteSquareText/containerSquareText';
import changeSquareTextDisplay from '../Redux/Actions/squareTextAction';
import { IApplicationState } from '../Redux/store';
import { useSelector , useDispatch } from 'react-redux';

/* Deberia posicionarse la etiqueta Commentary sobre SquareText */

const AuxComponent = () => {


  const displaySquareText = useSelector<IApplicationState, IApplicationState["squareTextDisplay"]["squareTextDisplay"]>((state) => state.squareTextDisplay.squareTextDisplay);
  const dispatch = useDispatch();

  const activeSquareText = () => {

    if (displaySquareText === "none") {
      dispatch(changeSquareTextDisplay("block"));
    } else {
      dispatch(changeSquareTextDisplay("none"))
    }
    }
    
  
  return (
    <div style={{position:"relative"}}>
      <div>
        <Commentary
        activeSquareText={activeSquareText}
        />
      </div>
      <div style={{position:"absolute" , top:"0" , left:"0", right:"0" , marginLeft:"auto", marginRight:"auto"}}>
        <SquareText
          squareDisplay={displaySquareText}
          activeSquareText={activeSquareText}
        />
      </div>
    </div>
  );
}
export default AuxComponent;