import Link from "next/link";
import Image from "next/image";
import { isAbsoluteOrRelativeUrl } from "../../../../lib/utilities";
import "./service-card.scss";

interface IServiceCardProps {
  href: string;
  name: string;
  pictoUrl: string | null;
  pictoAlt?: string;
}

export default function ServiceCard({
  href,
  name,
  pictoUrl,
  pictoAlt = "",
}: IServiceCardProps) {
  const isValidUrl = pictoUrl && isAbsoluteOrRelativeUrl(pictoUrl);

  return (
    <Link className="c-ServiceCard" href={href} data-testid="service-card">
      <div className="c-ServiceCard__Svg">
        {isValidUrl && (
          <div className="c-ServiceCard__Picto">
            <Image src={pictoUrl} alt={pictoAlt} width="25" height="25" />
          </div>
        )}
      </div>
      <div className="c-ServiceCard__Name">{name}</div>
    </Link>
  );
}
