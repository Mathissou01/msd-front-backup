import {
  EventEntity,
  FreeContentEntity,
  NewEntity,
  QuizEntity,
  TipEntity,
} from "../graphql/codegen/generated-types";

export type TEditoFields = "news" | "event" | "freeContent" | "quiz" | "tip";

export const editoFields: Array<TEditoFields> = [
  "news",
  "event",
  "freeContent",
  "quiz",
  "tip",
];

export type TEditoTypenames =
  | "EventEntity"
  | "FreeContentEntity"
  | "NewEntity"
  | "QuizEntity"
  | "TipEntity";

export type TEditoTypes =
  | EventEntity
  | FreeContentEntity
  | NewEntity
  | QuizEntity
  | TipEntity;

export function isEditoType<T extends TEditoTypes>(
  content: TEditoTypes,
  typename: TEditoTypenames,
): content is T {
  return (content as T).__typename === typename;
}
