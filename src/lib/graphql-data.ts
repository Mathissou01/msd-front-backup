import {
  EditoBlockEntity,
  GetEditoBlockQuery,
  GetQuizAndTipsBlockQuery,
  GetRecyclingGuideBlockQuery,
  GetServicesBlockQuery,
  GetTopContentBlockQuery,
  QuizAndTipsBlockEntity,
  RecyclingGuideBlockEntity,
  TopContentBlockEntity,
} from "../graphql/codegen/generated-types";
import { normalizeStringPath, removeNulls } from "./utilities";
import { IServiceLink, isServiceLink } from "./service-links";

/* Homepage */
export function extractRecyclingGuideBlock(data: GetRecyclingGuideBlockQuery) {
  const recyclingGuideBlock: RecyclingGuideBlockEntity | null =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.recyclingGuideBlock?.data ?? null;

  return recyclingGuideBlock;
}

export interface IRemappedServiceBlock {
  titleContent: string | null;
  serviceLinks: Array<IServiceLink> | null;
}

export function remapServiceLinksDynamicZone(
  data: GetServicesBlockQuery,
): IRemappedServiceBlock {
  const serviceBlock =
    data?.contractCustomizations?.data[0].attributes?.homepage?.data?.attributes
      ?.servicesBlock?.data ?? null;
  const serviceLinks: Array<IServiceLink> | null =
    serviceBlock?.attributes?.serviceLinks
      ?.map((link) => {
        if (link) {
          const type = link.__typename;
          let path = "/";
          if (type === "ComponentLinksFrees" && link.name) {
            path = normalizeStringPath(link.name);
          }
          if (type && isServiceLink(link)) {
            return {
              type,
              name: link?.name,
              isDisplayed: link?.isDisplayed,
              picto: link?.picto,
              path,
            };
          }
        }
      })
      .filter(removeNulls) ?? null;
  return {
    titleContent: serviceBlock?.attributes?.titleContent ?? null,
    serviceLinks,
  };
}

export function extractQuizAndTipsBlock(data: GetQuizAndTipsBlockQuery) {
  const quizAndTipsBlock: QuizAndTipsBlockEntity | null =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.quizAndTipsBlock?.data ?? null;

  return quizAndTipsBlock;
}

export function extractTopContentBlock(data: GetTopContentBlockQuery) {
  const topContentBlock =
    (data?.contractCustomizations?.data[0].attributes?.homepage?.data
      ?.attributes?.topContentBlock?.data as TopContentBlockEntity) ?? null;

  return topContentBlock;
}

export function extractEditoBlock(data: GetEditoBlockQuery) {
  const editoBlock =
    (data?.contractCustomizations?.data[0].attributes?.homepage?.data
      ?.attributes?.editoBlock?.data as EditoBlockEntity) ?? null;

  return {
    titleContent: editoBlock?.attributes?.titleContent ?? null,
    editoBlock,
  };
}
