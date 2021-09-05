import Commentary from './commentaryComponent';

interface IProps{
  activeSquareText: () => void;
}

const ContainerCommentary = (props:IProps) => {
  return (
    <div>
      <Commentary
      activeSquareText={props.activeSquareText}
      />
    </div>
  );
}

export default ContainerCommentary;