import Link from "next/link";
import LogoMSD from "public/images/logo_msd.svg";
import "./msd-logo.scss";

export default function MSDLogo() {
  const logoUrl = "https://www.monservicedechets.com/";

  return (
    <Link className="c-MSDLogo" href={logoUrl}>
      <LogoMSD />
    </Link>
  );
}
