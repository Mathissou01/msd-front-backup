import classNames from "classnames";
import React from "react";
import {
  ENavigationPages,
  useNavigation,
} from "../../../../hooks/useNavigation";
import NavigationListButton from "./NavigationListButton/NavigationListButton";
import { useGetContractMenuQuery } from "../../../../graphql/codegen/generated-types";
import { normalizeStringPath, removeNulls } from "../../../../lib/utilities";
import CommonSpinner from "../../../Common/CommonSpinner/CommonSpinner";
import "./navigation-list.scss";

export interface INavigationLink {
  type?: string;
  name: string;
  isDisplayed: boolean;
  picto?: { data?: { attributes?: { url: string } } };
  path?: string;
}

// eslint-disable-next-line
export function isNavigationLink(link: any): link is INavigationLink {
  return "name" in link && "isDisplayed" in link;
}

interface INavigationListProps {
  isDesktopMode: boolean;
  onNavigationClick?: () => void;
}

export default function NavigationList({
  isDesktopMode,
  onNavigationClick,
}: INavigationListProps) {
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
  const contractId = "1";
  const { loading, error, data } = useGetContractMenuQuery({
    variables: { contractId },
  });
  const { currentPage, setCurrentPage } = useNavigation();

  const contractMenus: Array<INavigationLink> | null =
    data?.contract?.data?.attributes?.contractMenu?.data?.attributes?.serviceLinks
      ?.map((link) => {
        if (link) {
          const type = link.__typename;
          let path = "/";
          if (type === "ComponentLinksFrees" && link.name) {
            path = normalizeStringPath(link.name);
          }
          if (type && isNavigationLink(link)) {
            return {
              type,
              name: link?.name,
              isDisplayed: link?.isDisplayed,
              picto: link?.picto,
              path,
            };
          }
        }
      })
      .filter(removeNulls) ?? null;

  /* Local Data */
  const dynamicClassNames = classNames("c-NavigationList", {
    "c-NavigationList_desktop": isDesktopMode,
    "c-NavigationList_mobile": !isDesktopMode,
  });

  if (loading) return <CommonSpinner />;
  if (error) return <span>{error?.message}</span>;
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
        contractMenus.map((menu) => {
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
                key={`navigation_link_${path}`}
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
