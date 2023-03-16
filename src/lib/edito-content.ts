import {
  EventEntity,
  FreeContentEntity,
  NewEntity,
  QuizEntity,
  TipEntity,
} from "../graphql/codegen/generated-types";
import { removeNulls } from "./utilities";

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

/* Blocks */
export type TBlocksDynamicZone =
  | "ComponentBlocksFile"
  | "ComponentBlocksHorizontalRule"
  | "ComponentBlocksImage"
  | "ComponentBlocksSubHeading"
  | "ComponentBlocksVideo"
  | "ComponentBlocksWysiwyg"
  | "Error";
export type TDynamicFieldOption = Exclude<TBlocksDynamicZone, "Error">;

interface IPartialBlockDynamicZone {
  __typename: TBlocksDynamicZone;
  id: string;
}

interface IPartialBlock {
  __typename: TDynamicFieldOption;
  id: string;
}

export type IEditoBlock =
  | IPartialBlock
  | IBlocksFile
  | IBlocksHorizontalRule
  | IBlocksImage
  | IBlocksSubHeading
  | IBlocksVideo
  | IBlocksWysiwyg;

export interface IBlocksFile extends IPartialBlock {
  __typename: "ComponentBlocksFile";
}

export interface IBlocksHorizontalRule extends IPartialBlock {
  __typename: "ComponentBlocksHorizontalRule";
  hr: string;
}

export interface IBlocksImage extends IPartialBlock {
  __typename: "ComponentBlocksImage";
}

export interface IBlocksSubHeading extends IPartialBlock {
  __typename: "ComponentBlocksSubHeading";
  subHeadingTag?: string;
  subHeadingText?: string;
}

export interface IBlocksVideo extends IPartialBlock {
  __typename: "ComponentBlocksVideo";
  videoLink?: string;
  transcriptText?: string;
}

export interface IBlocksWysiwyg extends IPartialBlock {
  __typename: "ComponentBlocksWysiwyg";
}

/* Methods */
export function isEditoBlock(
  block: Partial<IPartialBlockDynamicZone>,
): block is IEditoBlock {
  return "__typename" in block && "id" in block;
}

export function isEditoBlockTypename<T extends IPartialBlock>(
  block: IEditoBlock,
  typename: TDynamicFieldOption,
): block is T {
  return block.__typename === typename;
}

export function remapEditoBlocksDynamicZone(
  blocks?: Array<Partial<IPartialBlockDynamicZone> | null> | null,
): Array<IEditoBlock> {
  return (
    blocks
      ?.map((block) => {
        if (block) {
          const type = block.__typename;
          if (type && type !== "Error" && isEditoBlock(block)) {
            return {
              ...block,
              __typename: block.__typename,
              id: block.id,
            };
          }
        }
      })
      .filter(removeNulls) ?? []
  );
}
