import React from "react";
import {
  IBlocksHorizontalRule,
  IBlocksSubHeading,
  IBlocksVideo,
  IEditoBlock,
  isEditoBlockTypename,
  IBlocksImage,
} from "../../lib/edito-content";
import HorizontalRuleBlock from "./Blocks/HorizontalRuleBlock/HorizontalRuleBlock";
import ImageBlock from "./Blocks/ImageBlock/ImageBlock";
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
              key={`${index}_${block.id}`}
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
              key={`${index}_${block.id}`}
              videoLink={block.videoLink}
              transcriptText={block.transcriptText}
            />
          );
        }
        if (
          block.__typename === "ComponentBlocksHorizontalRule" &&
          isEditoBlockTypename<IBlocksHorizontalRule>(
            block,
            "ComponentBlocksHorizontalRule",
          ) &&
          block.hr
        ) {
          return <HorizontalRuleBlock key={`${index}_${block.id}`} />;
        }
        if (
          block.__typename === "ComponentBlocksImage" &&
          isEditoBlockTypename<IBlocksImage>(block, "ComponentBlocksImage") &&
          block.picture.data
        ) {
          return <ImageBlock key={`${index}_${block.id}`} block={block} />;
        }
      })}
    </div>
  );
}
