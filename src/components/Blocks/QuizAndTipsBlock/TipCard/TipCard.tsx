import Link from "next/link";
import Image from "next/image";
import {
  isAbsoluteOrRelativeUrl,
  makePublicAssetPath,
} from "../../../../lib/utilities";
import "./tip-card.scss";
import { TagEntity } from "../../../../graphql/codegen/generated-types";
import React from "react";

interface ITipCardProps {
  href: string;
  content: string;
  linkLabel: string;
  pictoUrl: string | null;
  pictoAlt?: string;
  tags?: Array<TagEntity>;
}

export default function TipCard({
  href,
  content,
  linkLabel,
  pictoUrl,
  pictoAlt = "",
  tags,
}: ITipCardProps) {
  const isValidUrl = pictoUrl && isAbsoluteOrRelativeUrl(pictoUrl);

  return (
    <Link className="c-TipCard" href={href}>
      <div className="c-TipCard__Wrapper">
        <div className="c-TipCard__Tags">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="c-TipCard__Tag c-TipCard__Tag_background"
            >
              {tag.attributes?.name}
            </span>
          ))}
        </div>
        <p className="c-TipCard__Content">
          {content.length > 80 ? `${content.slice(0, 80)}...` : content}
        </p>
        <span className="c-TipCard__Link">{linkLabel}</span>
        <div className="o-Blob c-TipCard__Svg">
          {isValidUrl && (
            <Image
              src={makePublicAssetPath(pictoUrl)}
              alt={pictoAlt}
              width={72}
              height={72}
            />
          )}
        </div>
      </div>
    </Link>
  );
}
