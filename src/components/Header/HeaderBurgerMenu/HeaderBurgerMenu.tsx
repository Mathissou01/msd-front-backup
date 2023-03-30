import classNames from "classnames";
import NavigationList from "../Navigation/NavigationList/NavigationList";
import MSDLogo from "../MSDLogo/MSDLogo";
import NavigationLink from "../Navigation/NavigationLink/NavigationLink";
import HeaderLinkSelector from "../HeaderTopBar/HeaderLinkSelector/HeaderLinkSelector";
import HeaderLinkProfile from "../HeaderTopBar/HeaderLinkProfile/HeaderLinkProfile";
import "./header-burger-menu.scss";

interface IHeaderBurgerMenuProps {
  isOpen: boolean;
  onNavigationClick: () => void;
}

export default function HeaderBurgerMenu({ isOpen }: IHeaderBurgerMenuProps) {
  // TODO: temporary static values, remove later
  const temporaryLabels = {
    selector: "Ma commune",
    profile: "Je suis",
    services: "Mes services",
    localisation: "Mon adresse",
    calendar: "Calendrier",
    notify: "Alertes",
    contact: "Contact",
  };
  const dynamicClassNames = classNames("c-HeaderBurgerMenu", {
    "c-HeaderBurgerMenu_expanded": isOpen,
  });

  return (
    <nav className={dynamicClassNames} data-testid="burger-menu">
      <ul className="c-HeaderBurgerMenu__List">
        <li className="c-HeaderBurgerMenu__Item">
          <h2>{temporaryLabels.selector}</h2>
          <HeaderLinkSelector />
        </li>
        <li className="c-HeaderBurgerMenu__Item">
          <div className="c-HeaderBurgerMenu__User">
            <span>{temporaryLabels.profile}</span>
            <HeaderLinkProfile />
          </div>
        </li>
        <li className="c-HeaderBurgerMenu__Item c-HeaderBurgerMenu__Item_grow">
          <nav className="c-HeaderBurgerMenu__Container" role="navigation">
            <h2>{temporaryLabels.services}</h2>
            <NavigationList isDesktopMode={false} />
          </nav>
        </li>
        <li className="c-HeaderBurgerMenu__Item c-HeaderBurgerMenu__Item_grow">
          <nav className="c-HeaderBurgerMenu__Container" role="navigation">
            <NavigationLink
              href="/"
              pictoUrl="/images/pictos/localisation.svg"
              isDesktopMode={false}
              label={temporaryLabels.localisation}
            />
            <NavigationLink
              href="/"
              pictoUrl="/images/pictos/calendar.svg"
              isDesktopMode={false}
              label={temporaryLabels.calendar}
            />
            <NavigationLink
              href="/"
              pictoUrl="/images/pictos/notify.svg"
              isDesktopMode={false}
              label={temporaryLabels.notify}
            />
            <NavigationLink
              href="/"
              pictoUrl="/images/pictos/contact.svg"
              isDesktopMode={false}
              label={temporaryLabels.contact}
            />
          </nav>
        </li>
        <li className="c-HeaderBurgerMenu__Item">
          <MSDLogo />
        </li>
      </ul>
    </nav>
  );
}
