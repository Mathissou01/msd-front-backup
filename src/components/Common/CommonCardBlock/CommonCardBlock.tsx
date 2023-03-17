import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UploadFile } from "../../../graphql/codegen/generated-types";
import Arrow from "public/images/pictos/arrow.svg";
import {
  handleDateFrenchFormat,
  makePublicAssetPath,
} from "../../../lib/utilities";
import "./common-card-block.scss";

interface ICommonCardBlockProps {
  title: string;
  shortDescription?: string;
  date?: string;
  tagLabels?: Array<string>;
  image: UploadFile | null;
  href: string;
  isAlignTextCenter?: boolean;
  isEventDisplay?: boolean;
}

export default function CommonCardBlock({
  title,
  shortDescription,
  date,
  // tagLabels,
  image,
  href,
  isEventDisplay = false,
  isAlignTextCenter = false,
}: ICommonCardBlockProps) {
  // TODO: remove temporary default image
  const temporaryDefaultImage = "/images/images-temp/temp_image.jpg";

  const linkLabel = "En savoir plus";
  const contentCardDate = new Date(date ?? "");
  const dataFrenchFormat = handleDateFrenchFormat(contentCardDate);
  const blockClasses = classNames("c-CommonCardBlock", {
    "c-CommonCardBlock_isEventDisplay": isEventDisplay,
  });
  const contentClasses = classNames("c-CommonCardBlock__Content", {
    "c-CommonCardBlock__Content_textCenter": isAlignTextCenter,
  });

  return (
    <Link className="c-CommonCardBlock__Container" href={href}>
      <div className={blockClasses}>
        {isEventDisplay ? (
          <div className="c-CommonCardBlock__EventDisplay">
            <Image
              className="c-CommonCardBlock__CalendarPicto"
              src={makePublicAssetPath("/images/pictos/calendar.svg")}
              alt={""}
              width={36}
              height={36}
            />
            {date && (
              <div className="c-CommonCardBlock__Date">
                {dataFrenchFormat ?? null}
              </div>
            )}
          </div>
        ) : image || temporaryDefaultImage ? (
          <div className="c-CommonCardBlock__Image">
            <Image
              src={makePublicAssetPath(image?.url ?? temporaryDefaultImage)}
              alt={image?.alternativeText ?? ""}
              width={image?.width ?? 482}
              height={image?.height ?? 309}
            />
          </div>
        ) : null}
        <div className={contentClasses}>
          <div className="c-CommonCardBlock__ContentHeader">
            {/* TODO: tags, also distinguish between two types of tags <div className="c-CommonCardBlock__Tags">*/}
            {/*  {tagLabels?.map((tagLabel, index) => (*/}
            {/*    <span*/}
            {/*      key={index}*/}
            {/*      className={`c-CommonCardBlock__Tag ${*/}
            {/*        index > 0 ? "c-CommonCardBlock__Tag_background" : ""*/}
            {/*      }`}*/}
            {/*    >*/}
            {/*      {tagLabel}*/}
            {/*    </span>*/}
            {/*  ))}*/}
            {/*</div>*/}
            {!isEventDisplay && date ? (
              <div className="c-CommonCardBlock__Date">{dataFrenchFormat}</div>
            ) : null}
          </div>
          <div className="c-CommonCardBlock__ContentBody">
            <h3 className="c-CommonCardBlock__Title">{title}</h3>
            <p className="c-CommonCardBlock__Description">{shortDescription}</p>
          </div>
          <div className="c-CommonCardBlock__Link">
            <span>{linkLabel}</span>
            <Arrow />
          </div>
        </div>
      </div>
    </Link>
  );
}
