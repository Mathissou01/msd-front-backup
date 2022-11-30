import "./header-burger-menu.scss";

interface IHeaderBurgerMenuProps {
  isOpen: boolean;
}

export default function HeaderBurgerMenu({ isOpen }: IHeaderBurgerMenuProps) {
  return (
    <nav
      className={`c-HeaderBurgerMenu ${
        isOpen ? "c-HeaderBurgerMenu_expanded" : ""
      }`}
      data-testid="burger-menu"
    >
      <ul className="c-HeaderBurgerMenu__List">
        <li className="c-HeaderBurgerMenu__Item" style={{ height: "88px" }}>
          <span>[Selecteur]</span>
        </li>
        <li className="c-HeaderBurgerMenu__Item" style={{ height: "64px" }}>
          <span>[Profil]</span>
        </li>
        <li
          className="c-HeaderBurgerMenu__Item c-HeaderBurgerMenu__Item_grow"
          style={{ height: "518px" }}
        >
          <nav role="navigation">
            <span>[Services]</span>
          </nav>
        </li>
        <li
          className="c-HeaderBurgerMenu__Item c-HeaderBurgerMenu__Item_grow"
          style={{ height: "264px" }}
        >
          <nav role="navigation">
            <span>[User]</span>
          </nav>
        </li>
        <li className="c-HeaderBurgerMenu__Item" style={{ height: "62px" }}>
          <span>[Logo]</span>
        </li>
      </ul>
    </nav>
  );
}
