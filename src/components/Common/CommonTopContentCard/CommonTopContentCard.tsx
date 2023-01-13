import classNames from "classnames";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TagEntity } from "../../../graphql/codegen/generated-types";
import { handleDateFrenchFormat } from "../../../lib/utilities";
import ArrowCorner from "public/images/pictos/arrow-corner.svg";
import "./common-top-content-card.scss";

interface ICommonTopContentCardProps {
  title: string;
  redirectUrl: string;
  description?: string;
  tags?: TagEntity[];
  date?: string;
  imageUrlDesktop?: string;
  imageUrlMobile?: string;
  imageAlt?: string;
  isTitleTop?: boolean;
  style?: "default" | "editoPage";
  isImgHasHover?: boolean;
}

export default function CommonTopContentCard({
  title,
  redirectUrl,
  description,
  tags,
  date,
  imageUrlDesktop,
  imageUrlMobile,
  imageAlt = "",
  isTitleTop = false,
  isImgHasHover = false,
  style = "default",
}: ICommonTopContentCardProps) {
  const knowMore = "En savoir plus";

  let contentCardDate;
  let dataFrenchFormat;
  if (date) {
    contentCardDate = new Date(date || "");
    dataFrenchFormat = handleDateFrenchFormat(contentCardDate);
  }

  const cardClassNames = classNames("c-CommonTopContentCard", {
    "c-CommonTopContentCard__EditoContent": style === "editoPage",
  });

  const imageClassNames = classNames("c-CommonTopContentCard__Image", {
    "c-CommonTopContentCard__Image_hoverImg": isImgHasHover,
  });

  const getTagClassNames = (index: number) => {
    return classNames("c-CommonTopContentCard__Tag", {
      "c-CommonTopContentCard__Tag_background": index > 0,
    });
  };

  return (
    <div className={cardClassNames}>
      <div className={imageClassNames}>
        {imageUrlDesktop ? (
          <Image
            src={imageUrlDesktop}
            alt={imageAlt}
            width={480}
            height={308}
            className="c-CommonTopContentCard__Img_desktop"
          />
        ) : null}
        {imageUrlMobile ? (
          <Image
            src={imageUrlMobile}
            alt={imageAlt}
            width={312}
            height={200}
            className="c-CommonTopContentCard__Img_mobile"
          />
        ) : null}
      </div>
      <div className="c-CommonTopContentCard__ContentContainer">
        <div className="c-CommonTopContentCard__Content">
          {isTitleTop ? (
            <h2 className="c-CommonTopContentCard__TitleContentTop">{title}</h2>
          ) : null}
          <div className="c-CommonTopContentCard__ContentTags">
            <div className="c-CommonTopContentCard__Tags">
              {tags?.map((tag, index) => (
                <span
                  key={tag.attributes?.name}
                  className={getTagClassNames(index)}
                >
                  {tag.attributes?.name}
                </span>
              ))}
            </div>
            {!isTitleTop ? (
              <div className="c-CommonTopContentCard__ContentCardDate">
                {dataFrenchFormat}
              </div>
            ) : null}
          </div>
          <div className="c-CommonTopContentCard__Description">
            {!isTitleTop ? (
              <h2 className="c-CommonTopContentCard__TitleContent">{title}</h2>
            ) : null}
            <p className="c-CommonTopContentCard__DescriptionContent">
              {description}
            </p>
          </div>
          {!isTitleTop ? (
            <Link className="c-CommonTopContentCard__Link" href={redirectUrl}>
              <span className="c-CommonTopContentCard__Label">{knowMore}</span>
              <ArrowCorner />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
