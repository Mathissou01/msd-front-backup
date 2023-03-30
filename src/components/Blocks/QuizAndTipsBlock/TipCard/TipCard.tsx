import Link from "next/link";
import Image from "next/image";
import {
  isAbsoluteOrRelativeUrl,
  makePublicAssetPath,
} from "../../../../lib/utilities";
import "./tip-card.scss";
import { TagEntity } from "../../../../graphql/codegen/generated-types";

interface ITipCardProps {
  tags?: Array<TagEntity>;
  content: string;
  linkLabel: string;
  pictoUrl: string | null;
  pictoAlt?: string;
}

export default function TipCard({
  // tags,
  content,
  linkLabel,
  pictoUrl,
  pictoAlt = "",
}: ITipCardProps) {
  const isValidUrl = pictoUrl && isAbsoluteOrRelativeUrl(pictoUrl);

  return (
    <Link className="c-TipCard" href="/">
      {/*<div className="c-TipCard__Tag">{tagLabel}</div>*/}
      <p className="c-TipCard__Content">{content}</p>
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
    </Link>
  );
}
