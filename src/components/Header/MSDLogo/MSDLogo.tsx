import Link from "next/link";
import Image from "next/image";
import { makePublicAssetPath } from "../../../lib/utilities";
import "./msd-logo.scss";

export default function MSDLogo() {
  const logoUrl = "https://www.monservicedechets.com/";
  const msdLogo = {
    source: "/images/logo_msd.svg",
    alternativeText: "Allez sur le site de Suez",
    ariaLabel: "Mon service déchets Suez, allez sur le site de Suez",
  };
  return (
    <Link className="c-MSDLogo" href={logoUrl}>
      <Image
        src={makePublicAssetPath(msdLogo.source)}
        alt={msdLogo.alternativeText}
        aria-label={msdLogo.ariaLabel}
        width={141}
        height={30}
      />
    </Link>
  );
}
