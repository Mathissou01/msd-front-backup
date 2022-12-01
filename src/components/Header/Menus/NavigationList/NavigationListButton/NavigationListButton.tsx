import Link from "next/link";
import "./navigation-list-button.scss";

interface INavigationListButtonProps {
  label: string;
  picto: string;
  isDesktopMode: boolean;
  isActive?: boolean;
}

export default function NavigationListButton({
  label,
  picto,
  isDesktopMode,
  isActive = false,
}: INavigationListButtonProps) {
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
        <div
          className="c-NavigationListButton__Picto"
          style={{
            // TODO: url is in /public for now, later from API
            //  also, is it safe to use mask-image?
            WebkitMaskImage: `url("/images/pictos-temp/${picto}.svg")`,
            maskImage: `url("/images/pictos-temp/${picto}.svg")`,
          }}
        />
      </div>
      <span className="c-NavigationListButton__Label">{label}</span>
    </Link>
  );
}
