import { ComponentBlocksDownloadBlock } from "../graphql/codegen/generated-types";

export interface ICollect {
  name: string;
  picto: {
    url: string;
  };
}

export interface IFilterData {
  name: string;
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
  collect: ICollect;
  distanceText?: string;
  files?: ComponentBlocksDownloadBlock[];
}

export interface IGeoPosition {
  lat: number;
  lng: number;
}
