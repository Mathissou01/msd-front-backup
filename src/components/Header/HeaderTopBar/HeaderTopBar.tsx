import classNames from "classnames";
import NavigationLink from "../Navigation/NavigationLink/NavigationLink";
import HeaderBurgerMenu from "../HeaderBurgerMenu/HeaderBurgerMenu";
import LogoCommunity from "./LogoCommunity/LogoCommunity";
import HeaderLinkProfile from "./HeaderLinkProfile/HeaderLinkProfile";
import HeaderLinkSelector from "./HeaderLinkSelector/HeaderLinkSelector";
import HeaderLinkUser from "./HeaderLinkUser/HeaderLinkUser";
import HeaderLinkSearch from "./HeaderLinkSearch/HeaderLinkSearch";
import "./header-top-bar.scss";

interface IHeaderTopBarProps {
  isMenuOpen: boolean;
  isDesktopMode?: boolean;
  handleClick: (a: boolean) => void;
}

export default function HeaderTopBar({
  isMenuOpen,
  isDesktopMode,
  handleClick,
}: IHeaderTopBarProps) {
  const buttonClassNames = classNames("c-HeaderTopBar__BurgerButton", {
    "c-HeaderTopBar__BurgerButton_expanded": isMenuOpen,
  });

  return (
    <>
      <header role="banner" className="c-HeaderTopBar" data-testid="top-bar">
        {!isDesktopMode && (
          <button
            type="button"
            className={buttonClassNames}
            aria-expanded={isMenuOpen}
            onClick={() => handleClick(!isMenuOpen)}
            data-testid="burger-menu-button"
          />
        )}
        <div className="c-HeaderTopBar__Item c-HeaderTopBar__Logo">
          <LogoCommunity />
        </div>
        <ul className="c-HeaderTopBar__List">
          {!isDesktopMode && (
            <>
              <li className="c-HeaderTopBar__Item c-HeaderTopBar__User">
                <HeaderLinkUser />
              </li>
              <li className="c-HeaderTopBar__Item c-HeaderTopBar__Search">
                <NavigationLink
                  href="/"
                  pictoUrl="/images/pictos/search.svg"
                  isDesktopMode
                />
              </li>
            </>
          )}
          {isDesktopMode && (
            <>
              <li className="c-HeaderTopBar__Item">
                <HeaderLinkSelector />
              </li>
              <div className="c-HeaderTopBar__Filler" aria-hidden={true} />
              <li className="c-HeaderTopBar__Item">
                <div className="c-HeaderTopBar__SearchBar">
                  <HeaderLinkSearch />
                </div>
              </li>
              <li className="c-HeaderTopBar__Item">
                <NavigationLink
                  href="/"
                  pictoUrl="/images/pictos/localisation.svg"
                  isDesktopMode
                />
              </li>
              <div className="c-HeaderTopBar__Separator" aria-hidden={true} />
              <li className="c-HeaderTopBar__Item">
                <NavigationLink
                  href="/"
                  pictoUrl="/images/pictos/calendar.svg"
                  isDesktopMode
                />
              </li>
              <div className="c-HeaderTopBar__Separator" aria-hidden={true} />
              <li className="c-HeaderTopBar__Item">
                <NavigationLink
                  href="/"
                  pictoUrl="/images/pictos/notify.svg"
                  isDesktopMode
                />
              </li>
              <div className="c-HeaderTopBar__Separator" aria-hidden={true} />
              <li className="c-HeaderTopBar__Item">
                <NavigationLink
                  href="/"
                  pictoUrl="/images/pictos/contact.svg"
                  isDesktopMode
                />
              </li>
              <div className="c-HeaderTopBar__Separator" aria-hidden={true} />
              <li className="c-HeaderTopBar__Item">
                <HeaderLinkProfile />
              </li>
              <div className="c-HeaderTopBar__Separator" aria-hidden={true} />
              <li className="c-HeaderTopBar__Item">
                <HeaderLinkUser />
              </li>
            </>
          )}
        </ul>
      </header>
      {!isDesktopMode && (
        <HeaderBurgerMenu
          isOpen={isMenuOpen}
          onNavigationClick={() => handleClick(false)}
        />
      )}
    </>
  );
}
