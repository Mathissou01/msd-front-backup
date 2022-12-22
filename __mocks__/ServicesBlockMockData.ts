export const defaultMockData = {
  titleContent: "Les services de ma ville",
  serviceLinks: [
    {
      type: "ComponentLinksRecycling",
      name: "Guide du tri",
      isDisplayed: true,
      picto: undefined,
      path: "/",
    },
    {
      type: "ComponentLinksFrees",
      name: "Valorisation de mes déchets",
      isDisplayed: true,
      picto: undefined,
      path: "valorisation-de-mes-dechets",
    },
    {
      type: "ComponentLinksFrees",
      name: "Réduire mes déchets",
      isDisplayed: true,
      picto: undefined,
      path: "reduire-mes-dechets",
    },
    {
      type: "ComponentLinksRequest",
      name: "dfhsrgsrh",
      isDisplayed: true,
      picto: undefined,
      path: "/",
    },
  ],
};

export const emptyMockData = {
  titleContent: "Les services de ma ville",
  serviceLinks: [],
};

export const lessThanThreeMockData = {
  titleContent: "Les services de ma ville",
  serviceLinks: [
    {
      type: "ComponentLinksRecycling",
      name: "Guide du tri",
      isDisplayed: true,
      picto: undefined,
      path: "/",
    },
    {
      type: "ComponentLinksFrees",
      name: "Valorisation de mes déchets",
      isDisplayed: true,
      picto: undefined,
      path: "valorisation-de-mes-dechets",
    },
    {
      type: "ComponentLinksFrees",
      name: "Point de collecte",
      isDisplayed: false,
      picto: undefined,
      path: "reduire-mes-dechets",
    },
    {
      type: "ComponentLinksRequest",
      name: "dfhsrgsrh",
      isDisplayed: false,
      picto: undefined,
      path: "/",
    },
  ],
};
