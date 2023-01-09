module.exports = `
query getGlobalData($contractId: ID!) {
  contract(id: $contractId) {
    data {
      attributes {
        contractCustomization {
          data {
            attributes {
              footer {
                data {
                  id
                  attributes {
                    accessibilityLevel
                    accessibilitySubService {
                      data {
                        attributes {
                          link
                          isActivated
                          name
                        }
                      }
                    }
                    cguSubService {
                      data {
                        attributes {
                          link
                          isActivated
                          name
                        }
                      }
                    }
                    cookiesSubService {
                      data {
                        attributes {
                          isActivated
                          link
                          name
                        }
                      }
                    }
                    contactUsSubService {
                      data {
                        attributes {
                          link
                          isActivated
                          label
                        }
                      }
                    }
                    confidentialitySubService {
                      data {
                        attributes {
                          link
                          isActivated
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        contractMenu {
          data {
            attributes {
              serviceLinks {
                ... on ComponentLinksMap {
                  __typename
                  name
                  isDisplayed
                  picto {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentLinksCalendar {
                  __typename
                  name
                  isDisplayed
                  picto {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentLinksRecycling {
                  __typename
                  name
                  isDisplayed
                  picto {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentLinksRequest {
                  __typename
                  name
                  isDisplayed
                  picto {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentLinksContactUs {
                  __typename
                  name
                  isDisplayed
                  picto {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentLinksNews {
                  __typename
                  name
                  isDisplayed
                  picto {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentLinksEvents {
                  __typename
                  name
                  isDisplayed
                  picto {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentLinksQuizzes {
                  __typename
                  name
                  isDisplayed
                  picto {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentLinksTips {
                  __typename
                  name
                  isDisplayed
                  picto {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentLinksFrees {
                  __typename
                  name
                  isDisplayed
                  picto {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentLinksExternal {
                  __typename
                  name
                  isDisplayed
                  picto {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  externalLink
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
