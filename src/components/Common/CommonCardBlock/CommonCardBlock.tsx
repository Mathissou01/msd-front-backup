import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  TagEntity,
  UploadFile,
} from "../../../graphql/codegen/generated-types";
import {
  handleDateFrenchFormat,
  makePublicAssetPath,
} from "../../../lib/utilities";
import "./common-card-block.scss";

interface ICommonCardBlockProps {
  href: string;
  title: string;
  shortDescription?: string;
  date?: string;
  tags?: Array<TagEntity>;
  image?: UploadFile | null;
  isAlignTextCenter?: boolean;
  isEventDisplay?: boolean;
}

export default function CommonCardBlock({
  href,
  title,
  shortDescription,
  date,
  tags,
  image,
  isEventDisplay = false,
  isAlignTextCenter = false,
}: ICommonCardBlockProps) {
  /* Static Data */
  const linkLabel = "En savoir plus";
  const contentCardDate = new Date(date ?? "");
  const dataFrenchFormat = handleDateFrenchFormat(contentCardDate);
  const arrowIcon = {
    source: "images/pictos/arrow.svg",
    alternativeText: "",
    ariaHidden: true,
  };
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
        ) : (
          <div className="c-CommonCardBlock__Image">
            {image?.url && (
              <Image
                src={makePublicAssetPath(image.url)}
                alt={image?.alternativeText ?? ""}
                width={image?.width ?? 482}
                height={image?.height ?? 309}
              />
            )}
          </div>
        )}
        <div className={contentClasses}>
          <div className="c-CommonCardBlock__ContentHeader">
            <div className="c-CommonCardBlock__DateContainer">
              {dataFrenchFormat}
            </div>
            {tags?.map((tagLabel, index) => (
              <span
                key={index}
                className="c-CommonCardBlock__Tag c-CommonCardBlock__Tag_background"
              >
                {tagLabel.attributes?.name}
              </span>
            ))}
          </div>
          <div className="c-CommonCardBlock__ContentBody">
            <h3 className="c-CommonCardBlock__Title">{title}</h3>
            <p className="c-CommonCardBlock__Description">{shortDescription}</p>
          </div>
          <div className="c-CommonCardBlock__Link">
            <span>{linkLabel}</span>
            <Image
              src={makePublicAssetPath(arrowIcon.source)}
              alt={arrowIcon.alternativeText}
              aria-hidden={arrowIcon.ariaHidden}
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
