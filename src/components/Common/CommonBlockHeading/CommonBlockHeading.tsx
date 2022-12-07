import "./common-block-heading.scss";

interface ICommonBlockHeadingProps {
  titleContent: string;
}

export default function CommonBlockHeading({
  titleContent,
}: ICommonBlockHeadingProps) {
  return (
    <div className="c-CommonBlockHeading">
      <h2>{titleContent}</h2>
      <div className="c-CommonBlockHeading__Line" />
    </div>
  );
}
