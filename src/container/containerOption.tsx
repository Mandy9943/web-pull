import Options from "../components/ComponenteOption/OptionComponent";
import { IApplicationState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import changeDisplay from "../redux/actions/optionAction";

interface IProps {
  option: string;
  percent: number;
}

const Option = (props: IProps) => {
  const optionDisplay = useSelector<
    IApplicationState,
    IApplicationState["optionDisplay"]
  >((state) => state.optionDisplay);
  const dispatch = useDispatch();

  const activePercent = () => {
    dispatch(changeDisplay("end", "left", "none", "block"));
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Options
        percent={props.percent}
        option={props.option}
        activePercent={activePercent}
        optionDisplay={optionDisplay}
      />
    </div>
  );
};

export default Option;
