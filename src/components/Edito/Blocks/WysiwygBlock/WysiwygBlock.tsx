import parse from "html-react-parser";
import React from "react";
import "./wysiwyg-block.scss";

interface IWysiwygBlockProps {
  textEditor: string;
}

export default function WysiwygBlock({ textEditor }: IWysiwygBlockProps) {
  /* Local Data */
  const parsedHtml = parse(textEditor, {});

  return <div className="c-WysiwygBlock">{parsedHtml}</div>;
}
