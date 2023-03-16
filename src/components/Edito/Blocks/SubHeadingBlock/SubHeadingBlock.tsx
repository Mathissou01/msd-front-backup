import React from "react";
import "./sub-heading-block.scss";

interface ISubHeadingBlockProps {
  subHeadingText: string;
  subHeadingTag?: string;
}

function generateTitleJSX(subHeadingTag: string, subHeadingText: string) {
  switch (subHeadingTag) {
    case "h2":
      return <h2>{subHeadingText}</h2>;
    case "h3":
      return <h3>{subHeadingText}</h3>;
    case "h4":
      return <h4>{subHeadingText}</h4>;
    case "h5":
      return <h5>{subHeadingText}</h5>;
    case "h6":
      return <h6>{subHeadingText}</h6>;
    default:
  }
}

export default function SubHeadingBlock({
  subHeadingText,
  subHeadingTag,
}: ISubHeadingBlockProps) {
  return (
    <div className="c-SubHeadingBlock">
      {subHeadingTag && generateTitleJSX(subHeadingTag, subHeadingText)}
      <div className="c-SubHeadingBlock__Line" />
    </div>
  );
}
