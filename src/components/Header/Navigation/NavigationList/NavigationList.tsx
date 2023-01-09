import classNames from "classnames";
import React from "react";
import { IServiceLink, isServiceLink } from "../../../../lib/service-links";
import { normalizeStringPath, removeNulls } from "../../../../lib/utilities";
import {
  ENavigationPages,
  useNavigation,
} from "../../../../hooks/useNavigation";
import globalData from "../../../../../config/global.json";
import NavigationListButton from "./NavigationListButton/NavigationListButton";
import "./navigation-list.scss";

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
  const { currentPage, setCurrentPage } = useNavigation();

  const contractMenus: Array<IServiceLink> | null =
    globalData.contractMenu?.data?.attributes?.serviceLinks
      ?.map(
        (link: {
          __typename: string;
          name: string | null;
          isDisplayed: boolean;
          picto: Record<string, unknown>;
        }) => {
          if (link) {
            const type = link.__typename;
            let path = "/";
            if (type === "ComponentLinksFrees" && link.name) {
              path = normalizeStringPath(link.name);
            }
            if (type && isServiceLink(link)) {
              return {
                type,
                name: link?.name,
                isDisplayed: link?.isDisplayed,
                picto: link?.picto,
                path,
              };
            }
          }
        },
      )
      .filter(removeNulls) ?? null;

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
      {contractMenus &&
        contractMenus.map((menu, index) => {
          if (
            menu?.isDisplayed &&
            menu?.type &&
            menu?.type in ENavigationPages
          ) {
            let path: string =
              Object.values(ENavigationPages)[
                Object.keys(ENavigationPages).indexOf(menu.type)
              ];
            if (menu.type === "ComponentLinksFrees") {
              path += `/${menu.path}`;
            }
            return (
              <li
                key={`navigation_link_${path}_${index}`}
                className={`c-NavigationList__Item ${isActiveRoute(path)}`}
              >
                <NavigationListButton
                  href={path}
                  label={menu.name}
                  pictoUrl={menu.picto?.data?.attributes?.url ?? defaultPicto}
                  isDesktopMode={isDesktopMode}
                  isActive={currentPage === path}
                  onClick={() => handleClick(path)}
                />
              </li>
            );
          }
        })}
    </ul>
  );
}
