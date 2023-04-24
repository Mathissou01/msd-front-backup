// TODO: Delete interface when API is ready

export interface Address {
  attribution: string;
  licence: string;
  limit: number;
  query: string;
  type: string;
  version: string;
  features: Feature[];
}

export interface Feature {
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface Properties {
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
