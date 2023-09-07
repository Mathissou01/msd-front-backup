// TODO: Delete interface when API is ready

export interface IAddress {
  attribution: string;
  licence: string;
  limit: number;
  query: string;
  type: string;
  version: string;
  features: IAddressFeature[];
}

export interface IAddressFeature {
  geometry: IAddressGeometry;
  properties: IAddressProperties;
}

export interface IAddressGeometry {
  coordinates: number[];
  type: string;
}

export interface IAddressProperties {
  citycode: string;
  context: string;
  city: string;
  district: string;
  housenumber: string;
  id: string;
  importance: number;
  label: string;
  name: string;
  postcode: string;
  score: number;
  type: string;
  x: number;
  y: number;
}
