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
  /* Static Data */
  const routes = {
    searchRoute: "/",
    mapsRoute: "/",
    calendarRoute: "/",
    notifyRoute: "/",
    contactUsRoute: "/service/contact",
  };
  const searchIcon = {
    source: "/images/pictos/search.svg",
    alternativeText: "Afficher la recherche",
  };
  const notifyIcon = {
    source: "/images/pictos/notify.svg",
    alternativeText: "S'abonner aux alertes",
  };
  const contactIcon = {
    source: "/images/pictos/contact.svg",
    alternativeText: "Contactez-nous",
  };

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
                  pictoUrl={searchIcon.source}
                  pictoAlt={searchIcon.alternativeText}
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
              <div className="c-HeaderTopBar__Separator" aria-hidden={true} />
              <li className="c-HeaderTopBar__Item">
                <NavigationLink
                  href="/"
                  pictoUrl={notifyIcon.source}
                  pictoAlt={notifyIcon.alternativeText}
                  isDesktopMode
                />
              </li>
              <div className="c-HeaderTopBar__Separator" aria-hidden={true} />
              <li className="c-HeaderTopBar__Item">
                <NavigationLink
                  href={routes.contactUsRoute}
                  pictoUrl={contactIcon.source}
                  pictoAlt={contactIcon.alternativeText}
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
