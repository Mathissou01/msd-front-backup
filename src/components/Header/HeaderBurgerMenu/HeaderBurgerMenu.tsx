import classNames from "classnames";
import NavigationList from "../Menus/NavigationList/NavigationList";
import MSDLogo from "../MSDLogo/MSDLogo";
import "./header-burger-menu.scss";

interface IHeaderBurgerMenuProps {
  isOpen: boolean;
  onNavigationClick: () => void;
}

export default function HeaderBurgerMenu({
  isOpen,
  onNavigationClick,
}: IHeaderBurgerMenuProps) {
  const dynamicClassNames = classNames("c-HeaderBurgerMenu", {
    "c-HeaderBurgerMenu_expanded": isOpen,
  });

  return (
    <nav className={dynamicClassNames} data-testid="burger-menu">
      <ul className="c-HeaderBurgerMenu__List">
        <li className="c-HeaderBurgerMenu__Item" style={{ height: "88px" }}>
          <span>[Selecteur]</span>
        </li>
        <li className="c-HeaderBurgerMenu__Item" style={{ height: "64px" }}>
          <span>[Profil]</span>
        </li>
        <li className="c-HeaderBurgerMenu__Item c-HeaderBurgerMenu__Item_grow">
          <nav className="c-HeaderBurgerMenu__Container" role="navigation">
            <NavigationList
              isDesktopMode={false}
              onNavigationClick={() => onNavigationClick()}
            />
          </nav>
        </li>
        <li
          className="c-HeaderBurgerMenu__Item c-HeaderBurgerMenu__Item_grow"
          style={{ height: "264px" }}
        >
          <nav className="c-HeaderBurgerMenu__Container" role="navigation">
            <span>[User]</span>
          </nav>
        </li>
        <li className="c-HeaderBurgerMenu__Item">
          <MSDLogo />
        </li>
      </ul>
    </nav>
  );
}
