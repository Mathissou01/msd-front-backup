import {
  EditoBlockEntity,
  GetEditoBlockQuery,
  GetQuizAndTipsBlockQuery,
  GetRecyclingGuideBlockQuery,
  GetServicesBlockQuery,
  GetTopContentBlockQuery,
  GetWelcomeMessageBlockQuery,
  QuizAndTipsBlockEntity,
  RecyclingGuideBlockEntity,
  TopContentBlockEntity,
  WelcomeMessageBlockEntity,
} from "../graphql/codegen/generated-types";
import { IServiceLink, remapServiceLinksDynamicZone } from "./service-links";
import { removeNulls } from "./utilities";

/* Homepage */
export function extractWelcomeMessageBlock(data: GetWelcomeMessageBlockQuery) {
  const welcomeMessageBlock: WelcomeMessageBlockEntity | null =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.welcomeMessageBlock?.data ?? null;

  return welcomeMessageBlock;
}

export function extractRecyclingGuideBlock(data: GetRecyclingGuideBlockQuery) {
  const recyclingGuideBlock: RecyclingGuideBlockEntity | null =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.recyclingGuideBlock?.data ?? null;

  return recyclingGuideBlock;
}

export function extractServicesBlock(data: GetServicesBlockQuery) {
  const serviceBlock =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.servicesBlocks?.data[0] ?? null;
  const serviceLinks: Array<IServiceLink> | null = remapServiceLinksDynamicZone(
    serviceBlock?.attributes?.serviceLinks?.filter(removeNulls) ?? [],
  );

  return {
    titleContent: serviceBlock?.attributes?.titleContent ?? null,
    serviceLinks,
    audience: serviceBlock?.attributes?.audience?.data?.id ?? "0",
  };
}

export function extractQuizAndTipsBlock(data: GetQuizAndTipsBlockQuery) {
  const quizAndTipsBlock: QuizAndTipsBlockEntity | null =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.quizAndTipsBlocks?.data[0] ?? null;
  return quizAndTipsBlock;
}

export function extractTopContentBlock(data: GetTopContentBlockQuery) {
  const topContentBlock: TopContentBlockEntity | null =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.topContentBlocks?.data[0] ?? null;
  return topContentBlock;
}

export function extractEditoBlock(data: GetEditoBlockQuery) {
  const editoBlock: EditoBlockEntity | null =
    data?.contractCustomizations?.data[0]?.attributes?.homepage?.data
      ?.attributes?.editoBlocks?.data[0] ?? null;
  return editoBlock;
}
