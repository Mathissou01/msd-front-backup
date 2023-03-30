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
          __typename: "ContractEntityResponse",
          data: {
            __typename: "ContractEntity",
            attributes: {
              __typename: "Contract",
              contractMenu: {
                __typename: "ContractMenuEntityResponse",
                data: {
                  __typename: "ContractMenuEntity",
                  attributes: {
                    __typename: "ContractMenu",
                    serviceLinks: [
                      {
                        __typename: "ComponentLinksMap",
                        name: "Carte",
                        isDisplayed: true,
                        picto: {
                          __typename: "UploadFileEntityResponse",
                          data: {
                            __typename: "UploadFileEntity",
                            attributes: {
                              __typename: "UploadFile",
                              url: "https://fake-url/address.svg",
                            },
                          },
                        },
                      },
                      {
                        __typename: "ComponentLinksCalendar",
                        name: "Collecte à mon adresse",
                        isDisplayed: true,
                        picto: {
                          __typename: "UploadFileEntityResponse",
                          data: null,
                        },
                      },
                      {
                        __typename: "ComponentLinksRecycling",
                        name: "Guide du tri",
                        isDisplayed: true,
                        picto: {
                          __typename: "UploadFileEntityResponse",
                          data: null,
                        },
                      },
                      {
                        __typename: "ComponentLinksRequest",
                        name: "Faire une demande",
                        isDisplayed: true,
                        picto: {
                          __typename: "UploadFileEntityResponse",
                          data: null,
                        },
                      },
                      {
                        __typename: "ComponentLinksFrees",
                        name: "Réduire mes déchets",
                        isDisplayed: true,
                        picto: {
                          __typename: "UploadFileEntityResponse",
                          data: null,
                        },
                        freeContentSubService: {
                          __typename: "FreeContentSubServiceEntityResponse",
                          data: {
                            __typename: "FreeContentSubServiceEntity",
                            id: "2",
                            attributes: {
                              __typename: "FreeContentSubService",
                              name: "Réduire mes déchets",
                            },
                          },
                        },
                      },
                      {
                        __typename: "ComponentLinksFrees",
                        name: "Valoriser mes déchets",
                        isDisplayed: true,
                        picto: {
                          __typename: "UploadFileEntityResponse",
                          data: null,
                        },
                        freeContentSubService: {
                          __typename: "FreeContentSubServiceEntityResponse",
                          data: {
                            __typename: "FreeContentSubServiceEntity",
                            id: "1",
                            attributes: {
                              __typename: "FreeContentSubService",
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
