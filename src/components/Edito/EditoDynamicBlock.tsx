import React from "react";
import {
  IBlocksHorizontalRule,
  IBlocksSubHeading,
  IBlocksVideo,
  IEditoBlock,
  isEditoBlockTypename,
} from "../../lib/edito-content";
import HorizontalRuleBlock from "./Blocks/HorizontalRuleBlock/HorizontalRuleBlock";
import SubHeadingBlock from "./Blocks/SubHeadingBlock/SubHeadingBlock";
import VideoBlock from "./Blocks/VideoBlock/VideoBlock";
import "./edito.scss";

interface IEditoDynamicBlockProps {
  blocks?: Array<IEditoBlock>;
}

export default function EditoDynamicBlock({ blocks }: IEditoDynamicBlockProps) {
  return (
    <div className="c-EditoDynamicBlock">
      {blocks?.map((block, index) => {
        if (
          block.__typename === "ComponentBlocksSubHeading" &&
          isEditoBlockTypename<IBlocksSubHeading>(
            block,
            "ComponentBlocksSubHeading",
          ) &&
          block.subHeadingText
        ) {
          return (
            <SubHeadingBlock
              key={index}
              subHeadingText={block.subHeadingText}
              subHeadingTag={block.subHeadingTag}
            />
          );
        }
        if (
          block.__typename === "ComponentBlocksVideo" &&
          isEditoBlockTypename<IBlocksVideo>(block, "ComponentBlocksVideo") &&
          block.videoLink
        ) {
          return (
            <VideoBlock
              videoLink={block.videoLink}
              transcriptText={block.transcriptText}
              key={index}
            />
          );
        }
        if (
          block.__typename === "ComponentBlocksHorizontalRule" &&
          isEditoBlockTypename<IBlocksHorizontalRule>(
            block,
            "ComponentBlocksHorizontalRule",
          )
        ) {
          return <HorizontalRuleBlock key={block.id} />;
        }
      })}
    </div>
  );
}
