import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import {
  isAbsoluteOrRelativeUrl,
  makePublicAssetPath,
} from "../../../../../lib/utilities";
import { ENavigationPages } from "../../../../../hooks/useNavigation";
import "./navigation-list-button.scss";

interface INavigationListButtonProps {
  label: string;
  href: ENavigationPages | string;
  pictoUrl?: string;
  pictoAlt?: string;
  isDesktopMode: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

export default function NavigationListButton({
  label,
  href,
  pictoUrl,
  pictoAlt = "",
  isDesktopMode,
  isActive = false,
  onClick,
}: INavigationListButtonProps) {
  const dynamicClassNames = classNames("c-NavigationListButton", {
    "c-NavigationListButton_desktop": isDesktopMode,
    "c-NavigationListButton_mobile": !isDesktopMode,
    "c-NavigationListButton_active": isActive,
  });
  const isValidUrl = pictoUrl && isAbsoluteOrRelativeUrl(pictoUrl);
  return (
    <Link className={dynamicClassNames} href={href ?? "/"} onClick={onClick}>
      <div className="c-NavigationListButton__Circle">
        {isValidUrl && (
          <div className="c-NavigationListButton__Picto">
            <Image
              src={makePublicAssetPath(pictoUrl)}
              alt={pictoAlt}
              width={24}
              height={24}
            />
          </div>
        )}
      </div>
      <span className="c-NavigationListButton__Label">{label}</span>
    </Link>
  );
}
