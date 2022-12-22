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
                  attributes {
                    accessibilityLevel
                    cguSubService {
                      data {
                        attributes {
                          link
                        }
                      }
                    }
                    accessibilitySubService {
                      data {
                        attributes {
                          link
                        }
                      }
                    }
                    confidentialitySubService {
                      data {
                        attributes {
                          link
                        }
                      }
                    }
                    cookiesSubService {
                      data {
                        attributes {
                          link
                        }
                      }
                    }
                    contactUsSubService {
                      data {
                        attributes {
                          isActivated
                          label
                          link
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
