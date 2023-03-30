import { GetContractMenuDocument } from "../src/graphql/codegen/generated-types";

export const defaultMockData = [
  {
    request: {
      query: GetContractMenuDocument,
      variables: {
        contractId: "1",
      },
    },
    result: {
      data: {
        contract: {
          data: {
            attributes: {
              contractMenu: {
                data: {
                  attributes: {
                    serviceLinks: [
                      {
                        name: "Carte",
                        isDisplayed: true,
                        picto: {
                          data: {
                            attributes: {
                              url: "https://stomsdmediadev.blob.core.windows.net/msd-media-dev/assets-local-grymas/address.svg",
                            },
                          },
                        },
                      },
                      {
                        name: "Collecte à mon adresse",
                        isDisplayed: true,
                        picto: {
                          data: null,
                        },
                      },
                      {
                        name: "Guide du tri",
                        isDisplayed: true,
                        picto: {
                          data: null,
                        },
                      },
                      {
                        name: "Faire une demande",
                        isDisplayed: true,
                        picto: {
                          data: null,
                        },
                      },
                      {
                        name: "Réduire mes déchets",
                        isDisplayed: true,
                        picto: {
                          data: null,
                        },
                        freeContentSubService: {
                          data: {
                            id: "2",
                            attributes: {
                              name: "Réduire mes déchets",
                            },
                          },
                        },
                      },
                      {
                        name: "Valoriser mes déchets",
                        isDisplayed: true,
                        picto: {
                          data: null,
                        },
                        freeContentSubService: {
                          data: {
                            id: "1",
                            attributes: {
                              name: "Valoriser mes déchets",
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
        },
      },
    },
  },
];
