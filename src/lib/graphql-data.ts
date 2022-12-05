import {
  GetQuizAndTipsBlockQuery,
  QuizAndTipsBlockEntity,
  GetRecyclingGuideBlockQuery,
  RecyclingGuideBlockEntity,
  ServiceEntity,
  EditorialServiceEntity,
} from "../graphql/codegen/generated-types";

/* Homepage */
export function extractRecyclingGuideBlock(data: GetRecyclingGuideBlockQuery) {
  const recyclingGuideBlock: RecyclingGuideBlockEntity | null =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.recyclingGuideBlock?.data ?? null;

  return recyclingGuideBlock;
}

export function extractQuizAndTipsBlock(data: GetQuizAndTipsBlockQuery) {
  const quizAndTipsBlock: QuizAndTipsBlockEntity | null =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.quizAndTipsBlock?.data ?? null;

  return quizAndTipsBlock;
}

/** Services **/

/* Editorial Service */
export function extractServiceByTypename(
  services: Array<ServiceEntity>,
  typename: "ComponentMsdEditorial" | "ComponentMsdRecycling",
): ServiceEntity | null {
  const service = services?.find(
    (service) =>
      service.attributes?.serviceInstance?.[0]?.__typename === typename ??
      false,
  );
  return service ?? null;
}

export function extractEditoSubServiceByTypename(
  editorialService: Array<EditorialServiceEntity>,
  typename: "ComponentEditoQuizzesSubService" | "ComponentEditoTipsSubService",
): EditorialServiceEntity | null {
  const editoSubservice = editorialService?.find((editorialService) => {
    return (
      editorialService.attributes?.subServiceInstance?.[0]?.__typename ===
      typename
    );
  });

  return editoSubservice ?? null;
}
