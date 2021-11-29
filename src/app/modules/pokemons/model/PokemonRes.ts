/* eslint-disable camelcase */
export interface StatusItem {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
export interface TypeItem {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonDetail {
  name: string;
  id: string;
  weight: string;
  height: string;
  types: TypeItem[];
  stats: StatusItem[];
}

export interface ResultDetail {
  name: string;
  url: string;
}
export interface PokemonRes {
  count: number;
  next: string;
  previous: null;
  results: ResultDetail[];
}
