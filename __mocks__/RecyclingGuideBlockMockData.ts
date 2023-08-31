import { GetRecyclingGuideSearchEngineDocument } from "../src/graphql/codegen/generated-types";

export const defaultMockData = {
  id: "1",
  attributes: {
    titleContent: "Un doute sur le recyclage d'un déchet",
    subtitleContent: "Trouver les consignes de tri dans ma ville",
    recyclingGuideDisplayContent: "Lampe, écran, épluchure",
    tags: {
      data: [],
    },
  },
};

export const defaultMockProviderData = [
  {
    request: {
      query: GetRecyclingGuideSearchEngineDocument,
      variables: {
        searchTerm: "cal",
        contractId: "1",
      },
    },
    result: {
      data: {
        recyclingGuideSearchEngine: [
          {
            typeName: "wasteForm",
            id: "5",
            name: "Aiguille usagee (medicale)",
          },
          {
            typeName: "wasteForm",
            id: "64",
            name: "Calculatrice",
          },
          {
            typeName: "wasteForm",
            id: "78",
            name: "Chaussons d'escalade",
          },
          {
            typeName: "wasteForm",
            id: "232",
            name: "Polystyrene expanse (calage)",
          },
          {
            typeName: "wasteForm",
            id: "271",
            name: "Stylo avec aiguille (medical)",
          },
          {
            typeName: "wasteForm",
            id: "326",
            name: "Bocal en verre",
          },
          {
            typeName: "wasteForm",
            id: "381",
            name: "Couvercle en metal (bocal)",
          },
          {
            typeName: "wasteForm",
            id: "409",
            name: "Gant et masque chirurgical ou FFP2",
          },
          {
            typeName: "wasteForm",
            id: "443",
            name: "Papier calque et millimetre ",
          },
        ],
      },
    },
  },
];
