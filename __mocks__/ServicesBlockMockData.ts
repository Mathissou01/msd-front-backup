export const defaultMockData = {
  titleContent: "Les services de ma ville",
  serviceLinks: [
    {
      localId: 0,
      type: "ComponentLinksRecycling",
      name: "Guide du tri",
      isDisplayed: true,
      picto: undefined,
      generatedSlug: "/",
    },
    {
      localId: 1,
      type: "ComponentLinksFrees",
      name: "Valorisation de mes déchets",
      isDisplayed: true,
      picto: undefined,
      generatedSlug: "valorisation-de-mes-dechets",
    },
    {
      localId: 2,
      type: "ComponentLinksFrees",
      name: "Réduire mes déchets",
      isDisplayed: true,
      picto: undefined,
      generatedSlug: "reduire-mes-dechets",
    },
    {
      localId: 3,
      type: "ComponentLinksRequest",
      name: "dfhsrgsrh",
      isDisplayed: true,
      picto: undefined,
      generatedSlug: "/",
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
      localId: 0,
      type: "ComponentLinksRecycling",
      name: "Guide du tri",
      isDisplayed: true,
      picto: undefined,
      generatedSlug: "/",
    },
    {
      localId: 1,
      type: "ComponentLinksFrees",
      name: "Valorisation de mes déchets",
      isDisplayed: true,
      picto: undefined,
      generatedSlug: "valorisation-de-mes-dechets",
    },
    {
      localId: 2,
      type: "ComponentLinksFrees",
      name: "Point de collecte",
      isDisplayed: false,
      picto: undefined,
      generatedSlug: "reduire-mes-dechets",
    },
    {
      localId: 3,
      type: "ComponentLinksRequest",
      name: "dfhsrgsrh",
      isDisplayed: false,
      picto: undefined,
      generatedSlug: "/",
    },
  ],
};
