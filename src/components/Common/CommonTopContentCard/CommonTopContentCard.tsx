import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowCorner from "public/images/pictos/arrow-corner.svg";
import { handleDateFrenchFormat } from "../../../lib/utilities";
import { TagEntity } from "../../../graphql/codegen/generated-types";
import "./common-top-content-card.scss";

interface ICommonTopContentCardProps {
  title: string;
  description?: string;
  tags?: TagEntity[];
  date?: string;
  imageUrlDesktop?: string;
  imageUrlMobile?: string;
  imageAlt?: string;
  isTitleTop?: boolean;
}
export default function CommonTopContentCard({
  title,
  description,
  tags,
  date,
  imageUrlDesktop = "",
  imageUrlMobile = "",
  imageAlt = "",
  isTitleTop = false,
}: ICommonTopContentCardProps) {
  const contentCardDate = new Date(date || "");
  const dataFrenchFormat = handleDateFrenchFormat(contentCardDate);

  return (
    <div className="c-CommonTopContentCard">
      <div className="c-CommonTopContentCard__Image">
        <Image
          src={imageUrlDesktop}
          alt={imageAlt}
          width={480}
          height={308}
          className="c-CommonTopContentCard__Img_desktop"
        />
        <Image
          src={imageUrlMobile}
          alt={imageAlt}
          width={312}
          height={200}
          className="c-CommonTopContentCard__Img_mobile"
        />
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
                  className={`c-CommonTopContentCard__Tag ${
                    index > 0 ? "c-CommonTopContentCard__Tag_backgroud" : ""
                  }`}
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
            <Link className="c-CommonTopContentCard__Link" href={"/"}>
              <button type="button" className="c-CommonTopContentCard__Button">
                En savoir plus
              </button>
              <ArrowCorner />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
