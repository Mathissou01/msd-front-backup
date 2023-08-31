import {
  GetNewByIdQuery,
  GetRecyclingWasteFormItemByIdQuery,
  GetTipByIdQuery,
  NewEntityResponse,
  TipEntityResponse,
  WasteFormEntityResponse,
} from "../graphql/codegen/generated-types";

export const previewTypes = ["tip", "new", "wasteForm"];
export type TPreviewTypes = "tip" | "new" | "wasteForm";

export type TPreviewQueryData =
  | GetTipByIdQuery
  | GetNewByIdQuery
  | GetRecyclingWasteFormItemByIdQuery
  | undefined;
export type TPreviewData =
  | TipEntityResponse
  | NewEntityResponse
  | WasteFormEntityResponse;

export function isPreviewType<T extends TPreviewData>(
  data: unknown,
  entityName: TPreviewTypes,
): data is T {
  return !!data && typeof data === "object" && entityName in data;
}
