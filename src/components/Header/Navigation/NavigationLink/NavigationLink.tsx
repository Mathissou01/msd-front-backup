import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import {
  isAbsoluteOrRelativeUrl,
  makePublicAssetPath,
} from "../../../../lib/utilities";
import "./navigation-link.scss";

interface INavigationLinkProps {
  href: string;
  label?: string;
  pictoUrl: string;
  pictoAlt?: string;
  isDesktopMode: boolean;
}

export default function NavigationLink({
  href,
  label,
  pictoUrl,
  pictoAlt = "",
  isDesktopMode = false,
}: INavigationLinkProps) {
  const dynamicClassNames = classNames("c-NavigationLink", {
    "c-NavigationLink_desktop": isDesktopMode,
    "c-NavigationLink_mobile": !isDesktopMode,
  });

  const isValidUrl = pictoUrl && isAbsoluteOrRelativeUrl(pictoUrl);
  return (
    <Link className={dynamicClassNames} href={href}>
      <div className="c-NavigationLink__Box">
        {isValidUrl && (
          <div className="c-NavigationLink__Picto">
            <Image
              src={makePublicAssetPath(pictoUrl)}
              alt={pictoAlt}
              width={24}
              height={24}
            />
          </div>
        )}
      </div>
      <span className="c-NavigationLink__Label">{label}</span>
    </Link>
  );
}
