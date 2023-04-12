import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowCorner from "public/images/pictos/arrow-corner.svg";
import {
  Maybe,
  TagEntity,
  UploadFileEntity,
} from "../../../../graphql/codegen/generated-types";
import {
  handleDateFrenchFormat,
  makePublicAssetPath,
} from "../../../../lib/utilities";
import "./top-content-card.scss";

interface ITopContentCardProps {
  title: string;
  shortDescription?: Maybe<string>;
  image: UploadFileEntity | null;
  href: string;
  tags?: TagEntity[];
  date?: string;
  style?: "styleEvent";
}

export default function TopContentCard({
  title,
  shortDescription,
  image,
  href,
  tags,
  date,
  style,
}: ITopContentCardProps) {
  const knowMore = "En savoir plus";
  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  useEffect(() => {
    if (date) {
      setFormattedDate(handleDateFrenchFormat(new Date(date ?? "")));
    }
  }, [date]);

  const topContentCardClassNames = classNames("c-TopContentCard", {
    [`c-TopContentCard__Banner_${style}`]: style,
  });

  return (
    <Link className={topContentCardClassNames} href={href}>
      <div className="c-TopContentCard__Banner">
        {image?.attributes && (
          <Image
            src={makePublicAssetPath(image.attributes.url)}
            alt={image.attributes.alternativeText ?? ""}
            width={image.attributes.width ?? 375}
            height={image.attributes.height ?? 205}
          />
        )}
      </div>
      <div className="c-TopContentCard__CardContainer">
        <div className="c-TopContentCard__Card">
          <div className="c-TopContentCard__Header">
            <div className="c-TopContentCard__Tags">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="c-TopContentCard__Tag c-TopContentCard__Tag_hasBackground"
                >
                  {tag.attributes?.name}
                </span>
              ))}
            </div>
            {formattedDate && (
              <div className="c-TopContentCard__Date">{formattedDate}</div>
            )}
          </div>
          <div className="c-TopContentCard__Content">
            <h2 className="c-TopContentCard__Title">{title}</h2>
            <p className="c-TopContentCard__Description">{shortDescription}</p>
          </div>
          <div className="c-TopContentCard__KnowMore">
            <span>{knowMore}</span>
            <ArrowCorner />
          </div>
        </div>
      </div>
    </Link>
  );
}
