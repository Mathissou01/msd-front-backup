export const defaultMockData = {
  data: {
    id: "1",
    attributes: {
      titleContent: "Astuces !",
      displayBlock: true,
      displayQuiz: true,
      quiz: {
        data: {
          id: "2",
          attributes: {
            title: "Nom du quiz",
            publishedDate: "2022-11-20T02:34:14.535Z",
          },
        },
      },
      displayTips: true,
      tips: {
        data: [
          {
            id: "2",
            attributes: {
              title: "tip 1",
              shortDescription:
                "Découper vos peaux de bananes avant de les jeter dans votre compost.",
              link: null,
              publishedDate: "2022-11-19T00:14:08.232Z",
              image: {
                data: {
                  attributes: {
                    hash: "banana_87ee7726e9",
                    mime: "image/svg+xml",
                    name: "banana.svg",
                    provider: "azure-storage-blob",
                    size: 78.5,
                    url: "/banana.svg",
                    alternativeText: null,
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
};

export const threeTipsMockData = {
  data: {
    id: "1",
    attributes: {
      titleContent: "Astuces !",
      displayBlock: true,
      displayQuiz: true,
      quiz: {
        data: {
          id: "2",
          attributes: {
            title: "Nom du quiz",
            publishedDate: "2022-11-20T02:34:14.535Z",
          },
        },
      },
      displayTips: true,
      tips: {
        data: [
          {
            id: "2",
            attributes: {
              title: "tip 1",
              shortDescription:
                "Découper vos peaux de bananes avant de les jeter dans votre compost.",
              link: null,
              publishedDate: "2022-11-19T00:14:08.232Z",
              image: {
                data: {
                  attributes: {
                    hash: "banana_87ee7726e9",
                    mime: "image/svg+xml",
                    name: "banana.svg",
                    provider: "azure-storage-blob",
                    size: 78.5,
                    url: "/banana.svg",
                    alternativeText: null,
                  },
                },
              },
            },
          },
          {
            id: "5",
            attributes: {
              title: "tip 2",
              shortDescription:
                "Pas besoin de nettoyer vos pots de yaourts avant de les jeter",
              link: null,
              publishedDate: "2022-11-19T00:14:37.403Z",
              image: {
                data: {
                  attributes: {
                    hash: "banana_87ee7726e9",
                    mime: "image/svg+xml",
                    name: "banana.svg",
                    provider: "azure-storage-blob",
                    size: 78.5,
                    url: "/banana.svg",
                    alternativeText: null,
                  },
                },
              },
            },
          },
          {
            id: "1",
            attributes: {
              title: "tip 3",
              shortDescription:
                "Remplacez vos sacs en plastique par des sacs réutilisables, un caddie ou des paniers.",
              link: null,
              publishedDate: "2022-11-18T10:17:11.158Z",
              image: {
                data: {
                  attributes: {
                    hash: "banana_87ee7726e9",
                    mime: "image/svg+xml",
                    name: "banana.svg",
                    provider: "azure-storage-blob",
                    size: 78.5,
                    url: "/banana.svg",
                    alternativeText: null,
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
};
