import React from "react";
import { THeadingTags } from "../../../../lib/edito-content";
import "./sub-heading-block.scss";

interface ISubHeadingBlockProps {
  subHeadingText: string;
  subHeadingTag: THeadingTags;
}

export default function SubHeadingBlock({
  subHeadingText,
  subHeadingTag,
}: ISubHeadingBlockProps) {
  const Heading: THeadingTags = subHeadingTag;

  return (
    <div className="c-SubHeadingBlock">
      <Heading>{subHeadingText}</Heading>
    </div>
  );
}
