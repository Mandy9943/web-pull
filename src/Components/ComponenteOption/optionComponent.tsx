import styled from 'styled-components';
import IOptionState from '../../Redux/types/OptionState/IOptionState';

interface IProps{
  percent: number;
  option: string;
  activePercent: () => void;
  optionDisplay: IOptionState;
}

const containerOption = (props:IProps) => {

  let percentString: string = String(props.percent);

  const DivContainerButton = styled.div`
  width: 60%;
  flex-grow: 7;
  display: flex;

  /* Propiedad de estado center-end */
  justify-content: ${props.optionDisplay.divJustifyContent};
  `;

  const ButtonOption = styled.button`
  height: 50px;
  width: 800px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.425);
  border: solid white 5px;
  margin: 10px 0px;
  display: flex;
  color: rgba(63, 60, 60, 0.815);
  font-size: 25px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding-left:0px;
  padding-right:0px;
  padding-top:0px;
  padding-bottom:0px;
  &:hover{
        background-color: rgba(255, 255, 255, 0.753);
    transition: 0.5s;
  }

  /* propiedad de estado  center - left */
  justify-content: ${props.optionDisplay.buttonJustifyContent};
  
  `;

  const DivContainerBarPercent = styled.div`
  background-color: white;
  border-radius: 50px;

  p{
    margin-top: 0px;
    margin-bottom: 0px;
  }
  
  /* Prpiedad porciento y Propiedad de estado none-block  */
  width: ${percentString}%;
  display: ${props.optionDisplay.divDisplay};
  `;

  const DivContainerPercent = styled.div`
  flex-grow: 5;
  padding-left: 10px;

  /* Propiedad de estado none-block */
  display: ${props.optionDisplay.divDisplay};
  `;

  const POptionPercent = styled.p`
  width:120px;
  margin-top:0px;
  margin-bottom:0px;
  height: auto;
  vertical-align: middle;
  font-weight: 900;
  font-size: 50px;
  -webkit-text-stroke: 2px white;
  color: rgba(255, 255, 255, 0.788);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  `;


  return (
  
    <div style={{ display: "flex", width: "100%" }}>
      <DivContainerButton>
        <ButtonOption onClick={props.activePercent}><DivContainerBarPercent><p>{props.option}</p></DivContainerBarPercent><p style={{ display: `${props.optionDisplay.pDisplay}`, alignItems: "center", margin: "0px 0px" }}>{props.option}</p></ButtonOption>
      </DivContainerButton>
      <DivContainerPercent>
        <POptionPercent>{percentString}%</POptionPercent>
      </DivContainerPercent>
    </div>
  );
}

export default containerOption;