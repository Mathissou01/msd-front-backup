export enum E_LEVEL_TYPE {
  "AGGREGATE",
  "REQUEST",
  "REQUEST_WITHOUT_AGGREGATE",
  "REQUEST_TYPE",
  "NOTHING",
}

export interface ILevel {
  id: string;
  levelNumber: number;
  type: E_LEVEL_TYPE;
}

export interface ILevelDatas {
  id: string;
  name: string;
  type: E_LEVEL_TYPE;
}
