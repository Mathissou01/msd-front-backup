import NavigationListButton from "./NavigationListButton/NavigationListButton";
import "./navigation-list.scss";

interface INavigationListProps {
  isDesktopMode: boolean;
}

export default function NavigationList({
  isDesktopMode,
}: INavigationListProps) {
  const temporaryLabels = {
    // TODO: temporary static values, remove later
    homepage: "Accueil",
    map: "Carte",
    address: "Collecte à mon adresse",
    recyclingGuide: "Guide du tri",
    demand: "Faire une demande",
    wastes: "Réduire mes déchets",
    leaf: "Valorisation des déchets",
  };

  return (
    <ul
      className={`c-NavigationList ${
        isDesktopMode ? "c-NavigationList_desktop" : "c-NavigationList_mobile"
      }`}
    >
      <li className="c-NavigationList__Item c-NavigationList__Item_active">
        <NavigationListButton
          label={temporaryLabels.homepage}
          pictoUrl="/images/pictos-temp/homepage.svg"
          isDesktopMode={isDesktopMode}
          isActive={true}
        />
      </li>
      <li className="c-NavigationList__Item">
        <NavigationListButton
          label={temporaryLabels.map}
          pictoUrl="/images/pictos-temp/map.svg"
          isDesktopMode={isDesktopMode}
        />
      </li>
      <li className="c-NavigationList__Item">
        <NavigationListButton
          label={temporaryLabels.address}
          pictoUrl="/images/pictos-temp/address.svg"
          isDesktopMode={isDesktopMode}
        />
      </li>
      <li className="c-NavigationList__Item">
        <NavigationListButton
          label={temporaryLabels.recyclingGuide}
          pictoUrl="/images/pictos-temp/recyclingGuide.svg"
          isDesktopMode={isDesktopMode}
        />
      </li>
      <li className="c-NavigationList__Item">
        <NavigationListButton
          label={temporaryLabels.demand}
          pictoUrl="/images/pictos-temp/demand.svg"
          isDesktopMode={isDesktopMode}
        />
      </li>
      <li className="c-NavigationList__Item">
        <NavigationListButton
          label={temporaryLabels.wastes}
          pictoUrl="/images/pictos-temp/wastes.svg"
          isDesktopMode={isDesktopMode}
        />
      </li>
      <li className="c-NavigationList__Item">
        <NavigationListButton
          label={temporaryLabels.leaf}
          pictoUrl="/images/pictos-temp/leaf.svg"
          isDesktopMode={isDesktopMode}
        />
      </li>
    </ul>
  );
}
