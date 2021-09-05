import Commentary from "../components/ComponentCommentary/CommentaryComponent";

interface IProps {
  activeSquareText: () => void;
}

const ContainerCommentary = (props: IProps) => {
  return (
    <div>
      <Commentary activeSquareText={props.activeSquareText} />
    </div>
  );
};

export default ContainerCommentary;
