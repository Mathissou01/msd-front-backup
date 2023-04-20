import classNames from "classnames";
import React from "react";
import {
  IServiceLink,
  remapServiceLinksDynamicZone,
} from "../../../../lib/service-links";
import {
  ENavigationPages,
  useNavigation,
} from "../../../../hooks/useNavigation";
import { useContract } from "../../../../hooks/useContract";
import NavigationListButton from "./NavigationListButton/NavigationListButton";
import "./navigation-list.scss";
import { removeNulls } from "../../../../lib/utilities";

interface INavigationListProps {
  isDesktopMode: boolean;
  onNavigationClick?: () => void;
}

export default function NavigationList({
  isDesktopMode,
  onNavigationClick,
}: INavigationListProps) {
  /* Static Data */
  const homepageLabel = "Accueil";
  const defaultPicto = "/images/pictos/default.svg";

  /* Methods */
  function isActiveRoute(route: ENavigationPages | string) {
    return route === currentPage ? "c-NavigationList__Item_active" : "";
  }

  function handleClick(path: string) {
    setCurrentPage(path);
    if (onNavigationClick) {
      onNavigationClick();
    }
  }

  /* External Data */
  const { contract } = useContract();
  const { currentPage, setCurrentPage } = useNavigation();

  const contractMenus: Array<IServiceLink> | null =
    remapServiceLinksDynamicZone(
      contract.attributes?.contractMenu?.data?.attributes?.serviceLinks?.filter(
        removeNulls,
      ) ?? [],
    );

  /* Local Data */
  const dynamicClassNames = classNames("c-NavigationList", {
    "c-NavigationList_desktop": isDesktopMode,
    "c-NavigationList_mobile": !isDesktopMode,
  });

  return (
    <ul className={dynamicClassNames}>
      <li
        className={`c-NavigationList__Item ${isActiveRoute(
          ENavigationPages["HomeLink"],
        )}`}
      >
        <NavigationListButton
          href={ENavigationPages["HomeLink"]}
          label={homepageLabel}
          pictoUrl="/images/pictos/homepage.svg"
          isDesktopMode={isDesktopMode}
          isActive={currentPage === ENavigationPages["HomeLink"]}
          onClick={() => handleClick(ENavigationPages["HomeLink"])}
        />
      </li>
      {/* <li
        className={`c-NavigationList__Item ${isActiveRoute(
          ENavigationPages["MonCompteurDechets"],
        )}`}
      >
        <NavigationListButton
          href={ENavigationPages["MonCompteurDechets"]}
          label="mon compteur déchets"
          pictoUrl="/images/pictos/mon_compteur_dechets.svg"
          isDesktopMode={isDesktopMode}
          isActive={currentPage === ENavigationPages["MonCompteurDechets"]}
          onClick={() => handleClick(ENavigationPages["MonCompteurDechets"])}
        />
      </li> */}
      {contractMenus &&
        contractMenus.map((menu, index) => {
          if (
            menu?.isDisplayed &&
            menu?.type &&
            menu?.type in ENavigationPages
          ) {
            return (
              <li
                key={`navigation_link_${index}`}
                className={`c-NavigationList__Item ${isActiveRoute(
                  menu.generatedSlug,
                )}`}
              >
                <NavigationListButton
                  href={menu.generatedSlug}
                  label={menu.name}
                  pictoUrl={menu.picto?.data?.attributes?.url ?? defaultPicto}
                  isDesktopMode={isDesktopMode}
                  isActive={currentPage === menu.generatedSlug}
                  onClick={() => handleClick(menu.generatedSlug)}
                />
              </li>
            );
          }
        })}
    </ul>
  );
}
