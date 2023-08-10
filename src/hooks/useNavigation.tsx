import React, { useContext } from "react";

export enum ENavigationPages {
  "HomeLink" = "/",
  // Editorial
  "ComponentLinksNews" = "/actualites-evenements",
  "ComponentLinksQuizzes" = "/quiz",
  "ComponentLinksTips" = "/astuces",
  "ComponentLinksFrees" = "/contenu-libre", // Path is concatenated with name as normalized string
  "ComponentLinksContactUs" = "/contact",
  "ComponentLinksMyWasteCounter" = "/mon-compteur-dechets",
  // Services
  "ComponentLinksRecyclingGuide" = "/service/guide-tri",
  "ComponentLinksDropOffMap" = "/service/carte",
  "ComponentLinksPickUpDay" = "/service/collecte-adresse",
  "ComponentLinksRequest" = "/service/demandes",
  // Misc
  "ComponentLinksExternal" = "/", // TODO: handle external links
}

export interface INavigationContext {
  currentPage: ENavigationPages | string;
  setCurrentPage: (pageName: ENavigationPages | string) => void;
}

export const NavigationContext = React.createContext<INavigationContext>({
  currentPage: ENavigationPages.HomeLink,
  setCurrentPage: () => null,
});

export const useNavigation = () => useContext(NavigationContext);
