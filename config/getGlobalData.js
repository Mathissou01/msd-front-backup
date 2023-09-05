module.exports = `
query getGlobalData($contractId: ID!) {
  contract(id: $contractId) {
    data {
      id
      attributes {
        clientName
        isFreemium
        clientType
        contractStatus
        isNonExclusive
        isRVFrance
          audiences {
          data {
            attributes {
              isActive
              type
            }
            id
          }
        }
        logo {
          data {
            id
            attributes {
              name
              mime
              size
              url
              provider
              hash
              alternativeText
            }
          }
        }
        alertNotificationService {
          data {
            id
          }
        }
        dropOffMapService {
          data {
            id
            attributes {
              isActivated
              name
            }
          }
        }
        pickUpDayService {
          data {
            id
            attributes {
              isActivated
              name
            }
          }
        }
        contractCustomization {
          data {
            id
            attributes {
              primaryColor
              secondaryColor
              textContrast
              footer {
                data {
                  attributes {
                    linkName
                    linkUrl
                    displayLink
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
                ... on ComponentLinksMyWasteCounter{
                  __typename
                  id
                  name
                  isDisplayed
                  picto{
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentLinksDropOffMap {
                  __typename
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
                  __typename
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
                  __typename
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
                  __typename
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
                  __typename
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
                  __typename
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
                  __typename
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
                  __typename
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
                  __typename
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
                  __typename
                  id
                  name
                  isDisplayed
                  freeContents {
                    data {
                      id
                      attributes {
                        name
                      }
                    }
                  }
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
                  id
                  name
                  isDisplayed
                  externalLink
                  picto {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
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
