import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowCorner from "public/images/pictos/arrow-corner.svg";
import "./top-content-card.scss";
import { TagEntity } from "../../../../graphql/codegen/generated-types";
import { handleDateFrenchFormat } from "../../../../lib/utilities";

interface ITopContentCardProps {
  title: string;
  description: string;
  tags?: TagEntity[];
  date?: string;
  imageUrlDesktop?: string;
  imageUrlMobile?: string;
  imageAlt?: string;
}
export default function TopContentCard({
  title,
  description,
  tags,
  date,
  imageUrlDesktop = "",
  imageUrlMobile = "",
  imageAlt = "",
}: ITopContentCardProps) {
  const contentCardDate = new Date(date || "");
  const dataFrenchFormat = handleDateFrenchFormat(contentCardDate);
  return (
    <div className="c-TopContentCard">
      <div className="c-TopContentCard__Image">
        <Image
          src={imageUrlDesktop}
          alt={imageAlt}
          width={480}
          height={308}
          className="c-TopContentCard__Img_desktop"
        />
        <Image
          src={imageUrlMobile}
          alt={imageAlt}
          width={312}
          height={200}
          className="c-TopContentCard__Img_mobile"
        />
      </div>
      <div className="c-TopContentCard__Content">
        <div className="c-TopContentCard__ContentTags">
          <div className="c-TopContentCard__Tags">
            {tags?.map((tag, index) => (
              <span
                key={tag.attributes?.name}
                className={`c-TopContentCard__Tag ${
                  index > 0 ? "c-TopContentCard__Tag_backgroud" : ""
                }`}
              >
                {tag.attributes?.name}
              </span>
            ))}
          </div>
          <div className="c-TopContentCard__ContentCardDate">
            {dataFrenchFormat}
          </div>
        </div>
        <div className="c-TopContentCard__Description">
          <h2 className="c-TopContentCard__TitleContent">{title}</h2>
          <p className="c-TopContentCard__DescriptionContent">{description}</p>
        </div>
        <Link className="c-TopContentCard__Link" href={"/"}>
          <button type="button" className="c-TopContentCard__Button">
            En savoir plus
          </button>
          <ArrowCorner />
        </Link>
      </div>
    </div>
  );
}
