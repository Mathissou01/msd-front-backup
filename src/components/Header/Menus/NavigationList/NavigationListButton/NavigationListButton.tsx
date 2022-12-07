import Link from "next/link";
import "./navigation-list-button.scss";
import Image from "next/image";
import { isAbsoluteOrRelativeUrl } from "../../../../../lib/utilities";
import classNames from "classnames";

interface INavigationListButtonProps {
  label: string;
  pictoUrl: string;
  pictoAlt?: string;
  isDesktopMode: boolean;
  isActive?: boolean;
}

export default function NavigationListButton({
  label,
  pictoUrl,
  pictoAlt = "",
  isDesktopMode,
  isActive = false,
}: INavigationListButtonProps) {
  const dynamicClassNames = classNames("c-NavigationListButton", {
    "c-NavigationListButton_desktop": isDesktopMode,
    "c-NavigationListButton_mobile": !isDesktopMode,
    "c-NavigationListButton_active": isActive,
  });
  const isValidUrl = pictoUrl && isAbsoluteOrRelativeUrl(pictoUrl);

  return (
    <Link className={dynamicClassNames} href={"/"}>
      <div className="c-NavigationListButton__Circle">
        {isValidUrl && (
          <div className="c-NavigationListButton__Picto">
            <Image src={pictoUrl} alt={pictoAlt} width={24} height={24} />
          </div>
        )}
      </div>
      <span className="c-NavigationListButton__Label">{label}</span>
    </Link>
  );
}
