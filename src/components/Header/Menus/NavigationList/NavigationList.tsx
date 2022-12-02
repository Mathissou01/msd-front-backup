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
          picto="homepage"
          isDesktopMode={isDesktopMode}
          isActive={true}
        />
      </li>
      <li className="c-NavigationList__Item">
        <NavigationListButton
          label={temporaryLabels.map}
          picto="map"
          isDesktopMode={isDesktopMode}
        />
      </li>
      <li className="c-NavigationList__Item">
        <NavigationListButton
          label={temporaryLabels.address}
          picto="address"
          isDesktopMode={isDesktopMode}
        />
      </li>
      <li className="c-NavigationList__Item">
        <NavigationListButton
          label={temporaryLabels.recyclingGuide}
          picto="recyclingGuide"
          isDesktopMode={isDesktopMode}
        />
      </li>
      <li className="c-NavigationList__Item">
        <NavigationListButton
          label={temporaryLabels.demand}
          picto="demand"
          isDesktopMode={isDesktopMode}
        />
      </li>
      <li className="c-NavigationList__Item">
        <NavigationListButton
          label={temporaryLabels.wastes}
          picto="wastes"
          isDesktopMode={isDesktopMode}
        />
      </li>
      <li className="c-NavigationList__Item">
        <NavigationListButton
          label={temporaryLabels.leaf}
          picto="leaf"
          isDesktopMode={isDesktopMode}
        />
      </li>
    </ul>
  );
}
