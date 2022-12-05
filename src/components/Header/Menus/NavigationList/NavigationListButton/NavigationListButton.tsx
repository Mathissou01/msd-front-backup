import Link from "next/link";
import "./navigation-list-button.scss";
import Image from "next/image";
import { isAbsoluteOrRelativeUrl } from "../../../../../lib/utilities";

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
  const isValidUrl = pictoUrl && isAbsoluteOrRelativeUrl(pictoUrl);

  return (
    <Link
      className={`c-NavigationListButton ${
        isDesktopMode
          ? "c-NavigationListButton_desktop"
          : "c-NavigationListButton_mobile"
      } ${isActive ? "c-NavigationListButton_active" : ""}`}
      href={"/"}
    >
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
