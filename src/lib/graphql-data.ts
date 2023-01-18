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
import { IServiceLink, remapServiceLinksDynamicZone } from "./service-links";

/* Homepage */
export function extractRecyclingGuideBlock(data: GetRecyclingGuideBlockQuery) {
  const recyclingGuideBlock: RecyclingGuideBlockEntity | null =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.recyclingGuideBlock?.data ?? null;

  return recyclingGuideBlock;
}

export function extractServicesBlock(data: GetServicesBlockQuery) {
  const serviceBlock =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.servicesBlock?.data ?? null;
  const serviceLinks: Array<IServiceLink> | null = remapServiceLinksDynamicZone(
    serviceBlock?.attributes?.serviceLinks ?? null,
  );

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
  const topContentBlock: TopContentBlockEntity | null =
    data.contractCustomizations?.data[0].attributes?.homepage?.data?.attributes
      ?.topContentBlock?.data ?? null;
  return topContentBlock;
}

export function extractEditoBlock(data: GetEditoBlockQuery) {
  const editoBlock: EditoBlockEntity | null =
    data?.contractCustomizations?.data[0].attributes?.homepage?.data?.attributes
      ?.editoBlock?.data ?? null;
  return editoBlock;
}
