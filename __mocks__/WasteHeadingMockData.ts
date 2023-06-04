import {
  Flow,
  UploadFileEntityResponse,
} from "../src/graphql/codegen/generated-types";

export const defaultMockData = {
  title: "Edito heading title",
  picto: {
    data: {
      attributes: {
        url: "/images/images-temp/temp_image.jpg",
        alternativeText: "",
        hash: "",
        mime: "",
        name: "",
        provider: "",
        size: 0,
      },
    },
  } as UploadFileEntityResponse,
  collecItems: {
    __typename: "Flow",
    name: "Déchets d’équipements électriques et électroniques",
    recyclingGesture: "no_trash",
    collectVoluntaries: {
      data: [
        {
          __typename: "CollectVoluntaryEntity",
          id: "1",
          attributes: {
            __typename: "CollectVoluntary",
            name: "Colonne",
            picto: {
              __typename: "UploadFileEntityResponse",
              data: {
                __typename: "UploadFileEntity",
                id: "17",
                attributes: {
                  __typename: "UploadFile",
                  name: "decheterie_496861.svg",
                  hash: "decheterie_496861_8571ce080c",
                  mime: "image/svg+xml",
                  size: 2.38,
                  url: "https://stomsdmediadev.blob.core.windows.net/msd-media-dev/assets-local-sdial/decheterie_496861.svg",
                  provider: "azure-storage-blob",
                  alternativeText: null,
                },
              },
            },
          },
        },
      ],
    },
    collectDropOffs: {
      data: [
        {
          id: "2",
          attributes: {
            name: "Déchèterie",
            picto: {
              data: [
                {
                  id: "17",
                  attributes: {
                    url: "/images/images-temp/temp_image.jpg",
                    alternativeText: "",
                    hash: "",
                    mime: "",
                    name: "",
                    provider: "",
                    size: 0,
                  },
                },
              ],
            },
          },
        },
      ],
    },
    collectDoorToDoors: {
      __typename: "CollectDoorToDoorRelationResponseCollection",
      data: [
        {
          __typename: "CollectDoorToDoorEntity",
          id: "1",
          attributes: {
            __typename: "CollectDoorToDoor",
            name: "Sac",
            picto: {
              __typename: "UploadFileEntityResponse",
              data: {
                __typename: "UploadFileEntity",
                id: "17",
                attributes: {
                  __typename: "UploadFile",
                  name: "decheterie_496861.svg",
                  hash: "decheterie_496861_8571ce080c",
                  mime: "image/svg+xml",
                  size: 2.38,
                  url: "https://stomsdmediadev.blob.core.windows.net/msd-media-dev/assets-local-sdial/decheterie_496861.svg",
                  provider: "azure-storage-blob",
                  alternativeText: null,
                },
              },
            },
          },
        },
      ],
    },
  } as Flow,
};
