import { PokemonRes } from '../model/PokemonRes';

export namespace PokemonsDTO {
  export namespace Get {
    export interface Output extends PokemonRes {}
  }
}
