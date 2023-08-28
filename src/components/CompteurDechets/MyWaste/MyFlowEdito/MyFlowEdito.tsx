import React from "react";
import Image from "next/image";
import VideoBlock from "../../../Edito/Blocks/VideoBlock/VideoBlock";
import "./my-flow-edito-block.scss";
import RecycleIcon from "../../../../../public/images/pictos/recycle-icon.svg";
import TruckIcon from "../../../../../public/images/pictos/truck-icon.svg";

interface IMyWasteFlowEdito {
  __typename?: string;
  id?: string;
  subHeadingText?: string;
  subHeadingTag?: string;
  transcriptText?: string;
  videoLink?: string;
  textEditor?: string;
  picture?: string[];
}
interface MyWasteFlowEditoProps {
  wasteFlow: IMyWasteFlowEdito;
}

const imgUrl =
  "https://actualitte.com/uploads/images/the-one-ring-the-lord-of-the-rings-5fe720b868b9b593188157.jpg";

const decodeHtmlEntities = (html: string) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
};

export default function MyFlowEdito({ wasteFlow }: MyWasteFlowEditoProps) {
  const ComponentBlocksSubHeading = wasteFlow?.__typename ===
    "ComponentBlocksSubHeading" && (
    <p className="c-MyFlowEdito__Title">
      <RecycleIcon />
      {wasteFlow.subHeadingText}
    </p>
  );
  const ComponentBlocksWysiwyg = wasteFlow.__typename ===
    "ComponentBlocksWysiwyg" && (
    <div className="c-MyFlowEdito__Wysiwyg">
      <div className="c-MyFlowEdito__WysiwygIcon">
        <TruckIcon />
      </div>
      <div
        className="c-MyFlowEdito__WysiwygContent"
        dangerouslySetInnerHTML={{
          __html: decodeHtmlEntities(wasteFlow.textEditor || ""),
        }}
      ></div>
    </div>
  );

  const ComponentBlocksVideo = wasteFlow.__typename ===
    "ComponentBlocksVideo" && (
    <div className="c-MyFlowEdito__Video">
      {wasteFlow?.videoLink && (
        <VideoBlock
          videoLink={wasteFlow?.videoLink}
          transcriptText={wasteFlow?.transcriptText}
          hasMaxWith={true}
        />
      )}
    </div>
  );
  const ComponentBlocksImage = wasteFlow.__typename ===
    "ComponentBlocksImage" && (
    <div className="c-MyFlowEdito__ImageContainer">
      <Image
        src={imgUrl}
        alt="Image section Emballage"
        width="380"
        height="200"
        className="c-MyFlowEdito__Image"
      />
    </div>
  );
  return (
    <>
      {ComponentBlocksSubHeading} {ComponentBlocksWysiwyg}
      {ComponentBlocksVideo} {ComponentBlocksImage}
    </>
  );
}
