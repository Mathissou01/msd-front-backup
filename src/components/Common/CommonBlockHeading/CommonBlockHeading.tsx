import classNames from "classnames";
import "./common-block-heading.scss";

interface ICommonBlockHeadingProps {
  titleContent: string;
  subTitle?: string;
  isAlignLeft?: boolean;
}

export default function CommonBlockHeading({
  titleContent,
  subTitle = "",
  isAlignLeft = false,
}: ICommonBlockHeadingProps) {
  const headingClassNames = classNames("c-CommonBlockHeading", {
    "c-CommonBlockHeading_alignLeft": isAlignLeft,
  });
  return (
    <div className={headingClassNames}>
      <h2>{titleContent}</h2>
      {subTitle && <p>{subTitle}</p>}
      <div className="c-CommonBlockHeading__Line" />
    </div>
  );
}
