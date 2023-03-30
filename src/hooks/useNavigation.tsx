import React, { useContext } from "react";

export enum ENavigationPages {
  "HomeLink" = "/",
  // Services
  "ComponentLinksMap" = "/service/carte",
  "ComponentLinksCalendar" = "/service/collecte-adresse",
  "ComponentLinksRecycling" = "/service/guide-tri",
  "ComponentLinksRequest" = "/service/demandes",
  "ComponentLinksContactUs" = "/service/contact",
  "ComponentLinksNews" = "/edito/actualite",
  "ComponentLinksEvents" = "/edito/evenement",
  "ComponentLinksQuizzes" = "/edito/quiz",
  "ComponentLinksTips" = "/edito/astuce",
  "ComponentLinksFrees" = "/edito", // Path is concatenated with name as normalized string
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
