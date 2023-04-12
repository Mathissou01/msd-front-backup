import React from "react";
import {
  IBlocksHorizontalRule,
  IBlocksSubHeading,
  IBlocksVideo,
  IBlocksImage,
  IEditoBlock,
  isEditoBlockTypename,
  TDynamicFieldOption,
  IBlocksWysiwyg,
} from "../../lib/edito-content";
import HorizontalRuleBlock from "./Blocks/HorizontalRuleBlock/HorizontalRuleBlock";
import ImageBlock from "./Blocks/ImageBlock/ImageBlock";
import SubHeadingBlock from "./Blocks/SubHeadingBlock/SubHeadingBlock";
import VideoBlock from "./Blocks/VideoBlock/VideoBlock";
import WysiwygBlock from "./Blocks/WysiwygBlock/WysiwygBlock";
import "./edito.scss";

interface IEditoDynamicBlockProps {
  type: TDynamicFieldOption;
  data: IEditoBlock;
}

export default function EditoDynamicBlock({
  type,
  data,
}: IEditoDynamicBlockProps) {
  function getBlockComponent(type: TDynamicFieldOption, data: IEditoBlock) {
    if (
      type === "ComponentBlocksSubHeading" &&
      isEditoBlockTypename<IBlocksSubHeading>(data, type) &&
      data.subHeadingTag &&
      data.subHeadingText
    ) {
      return (
        <SubHeadingBlock
          subHeadingText={data.subHeadingText}
          subHeadingTag={data.subHeadingTag}
        />
      );
    } else if (
      type === "ComponentBlocksHorizontalRule" &&
      isEditoBlockTypename<IBlocksHorizontalRule>(data, type)
    ) {
      return <HorizontalRuleBlock />;
    } else if (
      type === "ComponentBlocksVideo" &&
      isEditoBlockTypename<IBlocksVideo>(data, type) &&
      data.videoLink
    ) {
      return (
        <VideoBlock
          videoLink={data.videoLink}
          transcriptText={data.transcriptText}
        />
      );
    } else if (
      type === "ComponentBlocksImage" &&
      isEditoBlockTypename<IBlocksImage>(data, type) &&
      data.picture.data
    ) {
      return <ImageBlock image={data.picture.data} />;
    } else if (
      type === "ComponentBlocksWysiwyg" &&
      isEditoBlockTypename<IBlocksWysiwyg>(data, type) &&
      data.textEditor
    ) {
      return <WysiwygBlock textEditor={data.textEditor} />;
    } else {
      return null;
    }
  }

  return (
    <div className="c-EditoDynamicBlock">{getBlockComponent(type, data)}</div>
  );
}
