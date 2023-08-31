import {
  ComponentBlocksDownloadBlock,
  ComponentBlocksOpeningDay,
  Error,
} from "../graphql/codegen/generated-types";

export interface ICollect {
  name: string;
  picto: {
    url: string;
    name: string;
  };
}

export interface IFilterData {
  name: string;
  pictoName: string;
  picto: string;
  count: number;
}

export interface IMarker {
  id: string | undefined;
  name: string | null;
  lat: number;
  lng: number;
  mustKnow: string;
  address: string;
  postal: string;
  picto: string | null;
  pictoName: string | null;
  collect: ICollect;
  distanceText?: string;
  collectGender: string;
  time?: ComponentBlocksOpeningDay[];
  files?: ComponentBlocksDownloadBlock[];
}

export interface IGeoPosition {
  lat: number;
  lng: number;
}

export interface IContentData {
  infoId: string;
  infoPictoName: string;
  infoPicto: string;
  infoName: string;
  infoAddress: string;
  infoPostal: string;
  infoMustKnow: string;
  infoDistance: string;
  infoLat: number;
  infoLng: number;
  infoCollectGender: string;
  infoTime: Array<ComponentBlocksOpeningDay>;
  infoFiles: Array<ComponentBlocksDownloadBlock>;
  message: string;
  selecetedMarkerId: string;
}

export function isComponentBlocksOpeningDay(
  block: Partial<ComponentBlocksOpeningDay | Error> | null,
): block is ComponentBlocksOpeningDay {
  return (
    !!block &&
    "__typename" in block &&
    block.__typename === "ComponentBlocksOpeningDay"
  );
}
