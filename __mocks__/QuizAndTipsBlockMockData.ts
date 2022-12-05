export const defaultMockData = {
  data: {
    id: "1",
    attributes: {
      title: "Astuces !",
      displayBlock: true,
      displayQuiz: true,
      quiz: {
        data: {
          id: "2",
          attributes: {
            title: "Nom du quiz",
            publishedAt: "2022-11-20T02:34:14.535Z",
          },
        },
      },
      displayTips: true,
      tips: {
        data: [
          {
            id: "2",
            attributes: {
              title:
                "Découper vos peaux de bananes avant de les jeter dans votre compost.",
              titleLabel: null,
              link: "/images/pictos-temp/banana.svg",
              publishedAt: "2022-11-19T00:14:08.232Z",
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
      title: "Astuces !",
      displayBlock: true,
      displayQuiz: true,
      quiz: {
        data: {
          id: "2",
          attributes: {
            title: "Nom du quiz",
            publishedAt: "2022-11-20T02:34:14.535Z",
          },
        },
      },
      displayTips: true,
      tips: {
        data: [
          {
            id: "2",
            attributes: {
              title:
                "Découper vos peaux de bananes avant de les jeter dans votre compost.",
              titleLabel: null,
              link: "/images/pictos-temp/banana.svg",
              publishedAt: "2022-11-19T00:14:08.232Z",
            },
          },
          {
            id: "5",
            attributes: {
              title:
                "Pas besoin de nettoyer vos pots de yaourts avant de les jeter",
              titleLabel: null,
              link: "/images/pictos-temp/sink.svg",
              publishedAt: "2022-11-19T00:14:37.403Z",
            },
          },
          {
            id: "1",
            attributes: {
              title:
                "Remplacez vos sacs en plastique par des sacs réutilisables, un caddie ou des paniers.",
              titleLabel: null,
              link: "/images/pictos-temp/basket.svg",
              publishedAt: "2022-11-18T10:17:11.158Z",
            },
          },
        ],
      },
    },
  },
};
