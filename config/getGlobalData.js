module.exports = `
query getGlobalData($contractId: ID!) {
  contract(id: $contractId) {
    data {
      attributes {
        contractCustomization {
          data {
            id
            attributes {
              footer {
                data {
                  attributes {
                    accessibilityLevel
                    cguSubService {
                      data {
                        id
                        attributes {
                          name
                          link
                        }
                      }
                    }
                    accessibilitySubService {
                      data {
                        id
                        attributes {
                          name
                          link
                        }
                      }
                    }
                    confidentialitySubService {
                      data {
                        id
                        attributes {
                          name
                          link
                        }
                      }
                    }
                    cookiesSubService {
                      data {
                        id
                        attributes {
                          name
                          link
                        }
                      }
                    }
                    contactUsSubService {
                      data {
                        id
                        attributes {
                          name
                          label
                          link
                          isActivated
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
                ... on ComponentLinksDropOffMap {
                  id
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
                ... on ComponentLinksPickUpDay {
                  id
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
                ... on ComponentLinksRecyclingGuide {
                  id
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
                  id
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
                  id
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
                  id
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
                  id
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
                  id
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
                  id
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
                  id
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
                  id
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
