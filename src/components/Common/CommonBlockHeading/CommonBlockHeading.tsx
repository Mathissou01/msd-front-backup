import "./common-block-heading.scss";

interface ICommonBlockHeadingProps {
  blockTitle: string;
}

export default function CommonBlockHeading({
  blockTitle,
}: ICommonBlockHeadingProps) {
  return (
    <div className="c-CommonBlockHeading">
      <h2>{blockTitle}</h2>
      <div className="c-CommonBlockHeading__Line" />
    </div>
  );
}
