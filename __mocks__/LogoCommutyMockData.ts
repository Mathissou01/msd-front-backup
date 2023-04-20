import { GetLogoDocument } from "../src/graphql/codegen/generated-types";

export const defaultMockData = [
  {
    request: {
      query: GetLogoDocument,
      variables: {
        contractId: "1",
      },
    },
    result: {
      data: {
        contract: {
          data: {
            id: "1",
            attributes: {
              logo: {
                data: {
                  id: "24",
                  attributes: {
                    name: "Votre-collectivite_large.png",
                    mime: "image/png",
                    size: 21.91,
                    url: "https://stomsdmediadev.blob.core.windows.net/msd-media-dev/assets-local-sdial/Votre-collectivite_large.png",
                    provider: "azure-storage-blob",
                    hash: "Votre_collectivite_large_40e95434cd",
                    alternativeText: "Votre-collectivite_large.png",
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
