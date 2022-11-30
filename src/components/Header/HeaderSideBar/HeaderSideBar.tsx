import Link from "next/link";
import "./header-side-bar.scss";

export default function HeaderSideBar() {
  return (
    <nav className="c-HeaderSideBar" data-testid="side-bar">
      <ul className="c-HeaderSideBar__List">
        <li className="c-HeaderSideBar__Item c-HeaderSideBar__Item_active">
          <Link href={"/"}>[Accueil]</Link>
        </li>
        <li className="c-HeaderSideBar__Item">
          <Link href={"/"}>[Carte]</Link>
        </li>
        <li className="c-HeaderSideBar__Item">
          <Link href={"/"}>[Adresse]</Link>
        </li>
        <li className="c-HeaderSideBar__Item">
          <Link href={"/"}>[Guide]</Link>
        </li>
        <li className="c-HeaderSideBar__Item">
          <Link href={"/"}>[Demande]</Link>
        </li>
        <li className="c-HeaderSideBar__Item">
          <Link href={"/"}>[Réduire]</Link>
        </li>
        <li className="c-HeaderSideBar__Item">
          <Link href={"/"}>[Valoriser]</Link>
        </li>
      </ul>
      <div className="c-HeaderSideBar__Logo">
        <Link href={"/"}>[Logo MSD]</Link>
      </div>
    </nav>
  );
}
