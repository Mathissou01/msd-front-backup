import classNames from "classnames";
import Link from "next/link";
import HeaderBurgerMenu from "../HeaderBurgerMenu/HeaderBurgerMenu";
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
          <Link href={"/"}>[Logo Collectivité]</Link>
        </div>
        <ul className="c-HeaderTopBar__List">
          {!isDesktopMode && (
            <>
              <li className="c-HeaderTopBar__Item c-HeaderTopBar__User">
                <Link href={"/"}>[Us]</Link>
              </li>
              <li className="c-HeaderTopBar__Item c-HeaderTopBar__Search">
                <Link href={"/"}>[Re]</Link>
              </li>
            </>
          )}
          {isDesktopMode && (
            <>
              <li
                className="c-HeaderTopBar__Item"
                style={{ minWidth: "151px" }}
              >
                <Link href={"/"}>[Selecteur]</Link>
              </li>
              <div className="c-HeaderTopBar__Filler" aria-hidden={true} />
              <li
                className="c-HeaderTopBar__Item"
                style={{ minWidth: "316px" }}
              >
                <Link href={"/"}>[Recherche]</Link>
              </li>
              <li className="c-HeaderTopBar__Item">
                <Link href={"/"}>[Ad]</Link>
              </li>
              <div className="c-HeaderTopBar__Separator" aria-hidden={true} />
              <li className="c-HeaderTopBar__Item">
                <Link href={"/"}>[Ca]</Link>
              </li>
              <div className="c-HeaderTopBar__Separator" aria-hidden={true} />
              <li className="c-HeaderTopBar__Item">
                <Link href={"/"}>[Al]</Link>
              </li>
              <div className="c-HeaderTopBar__Separator" aria-hidden={true} />
              <li className="c-HeaderTopBar__Item">
                <Link href={"/"}>[Co]</Link>
              </li>
              <div className="c-HeaderTopBar__Separator" aria-hidden={true} />
              <li
                className="c-HeaderTopBar__Item"
                style={{ minWidth: "115px" }}
              >
                <Link href={"/"}>[Profil]</Link>
              </li>
              <div className="c-HeaderTopBar__Separator" aria-hidden={true} />
              <li className="c-HeaderTopBar__Item">
                <Link href={"/"}>[Us]</Link>
              </li>
            </>
          )}
        </ul>
      </header>
      {!isDesktopMode && <HeaderBurgerMenu isOpen={isMenuOpen} />}
    </>
  );
}
