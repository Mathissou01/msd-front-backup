import {
  GetNewestTopContentsQuery,
  TopContentBlockEntity,
} from "../src/graphql/codegen/generated-types";

export const defaultMockData = {
  __typename: "TopContentBlockEntity",
  id: "1",
  attributes: {
    __typename: "TopContentBlock",
    titleContent: "Actualités & Evénements",
    displayBlock: true,
    displayLastThreeContents: false,
    topContent: {
      __typename: "TopContentEntityResponse",
      data: {
        __typename: "TopContentEntity",
        attributes: {
          __typename: "TopContent",
          news: {
            __typename: "NewEntityResponse",
            data: {
              __typename: "NewEntity",
              attributes: {
                __typename: "New",
                title: "Café préparation",
                shortDescription:
                  "Participer à un café réparation avec La Recyclade au café restaurant de la Maison Phare. Vous apprendrez à faire un diagnostic et à réparer votre petit appareil électrique ou électronique de la vie quotidienne",
                tags: {
                  __typename: "TagRelationResponseCollection",
                  data: [
                    {
                      __typename: "TagEntity",
                      attributes: {
                        __typename: "Tag",
                        name: "Evénement",
                      },
                    },
                    {
                      __typename: "TagEntity",
                      attributes: {
                        __typename: "Tag",
                        name: "Réparation",
                      },
                    },
                  ],
                },
                publishedAt: "2022-12-05T15:59:19.503Z",
                image: {
                  __typename: "UploadFileEntityResponse",
                  data: null,
                },
              },
            },
          },
        },
      },
    },
    hasTopContent: false,
  },
} as TopContentBlockEntity;

export const newestTopContentMockData = {
  getNewestTopContents: [
    {
      __typename: "EventOrNews",
      id: "2",
      title: "Semaine initiatives vertes",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies consequat tortor sed.",
      publishedAt: "2022-12-29T09:11:05.800Z",
    },
    {
      __typename: "EventOrNews",
      id: "1",
      title: "Café préparation",
      shortDescription:
        "Participer à un café réparation avec La Recyclade au café restaurant de la Maison Phare. Vous apprendrez à faire un diagnostic et à réparer votre petit appareil électrique ou électronique de la vie quotidienne",
      publishedAt: "2022-12-05T15:59:19.503Z",
    },
    {
      __typename: "EventOrNews",
      id: "1",
      title: "Café préparation",
      shortDescription:
        "Participer à un café réparation avec La Recyclade au café restaurant de la Maison Phare. Vous apprendrez à faire un diagnostic et à réparer votre petit appareil électrique ou électronique de la vie quotidienne",
      publishedAt: "2022-12-05T15:59:19.503Z",
    },
  ],
} as GetNewestTopContentsQuery;
