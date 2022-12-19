import {
  GetRecyclingGuideBlockByContractIdQuery,
  RecyclingGuideBlockEntity,
  GetQuizAndTipsBlockByContractIdQuery,
  QuizAndTipsBlockEntity,
} from "../graphql/codegen/generated-types";

/* Homepage */
export function extractRecyclingGuideBlock(
  data: GetRecyclingGuideBlockByContractIdQuery,
) {
  const recyclingGuideBlock: RecyclingGuideBlockEntity | null =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.recyclingGuideBlock?.data ?? null;

  return recyclingGuideBlock;
}

export function extractQuizAndTipsBlock(
  data: GetQuizAndTipsBlockByContractIdQuery,
) {
  const quizAndTipsBlock: QuizAndTipsBlockEntity | null =
    data.contractCustomizations?.data[0]?.attributes?.homepage?.data?.attributes
      ?.quizAndTipsBlock?.data ?? null;

  return quizAndTipsBlock;
}
