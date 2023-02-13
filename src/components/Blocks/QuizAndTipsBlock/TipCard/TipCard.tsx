import Link from "next/link";
import Image from "next/image";
import { isAbsoluteOrRelativeUrl } from "../../../../lib/utilities";
import "./tip-card.scss";

interface ITipCardProps {
  tagLabel: string;
  content: string;
  linkLabel: string;
  pictoUrl: string | null;
  pictoAlt?: string;
}

export default function TipCard({
  // tagLabel,
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
          <Image src={pictoUrl} alt={pictoAlt} width={72} height={72} />
        )}
      </div>
    </Link>
  );
}
