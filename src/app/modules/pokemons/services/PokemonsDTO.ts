import { PokemonDetail, PokemonRes } from '../model/PokemonRes';

export namespace PokemonsDTO {
  export namespace Get {
    export interface Output extends PokemonRes {}
    export interface Detail extends PokemonDetail {}
    export interface Input {
      name: string;
    }
  }
}
