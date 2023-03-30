import classNames from "classnames";
import "./common-block-heading.scss";

interface ICommonBlockHeadingProps {
  titleContent: string;
  isAlignLeft?: boolean;
}

export default function CommonBlockHeading({
  titleContent,
  isAlignLeft = false,
}: ICommonBlockHeadingProps) {
  const headingClassNames = classNames("c-CommonBlockHeading", {
    "c-CommonBlockHeading_alignLeft": isAlignLeft,
  });
  return (
    <div className={headingClassNames}>
      <h2>{titleContent}</h2>
      <div className="c-CommonBlockHeading__Line" />
    </div>
  );
}
