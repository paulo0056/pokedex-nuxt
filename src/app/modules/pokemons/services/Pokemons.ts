import { HttpAdapter } from '../../../core/adapter/HttpAdapter';
import { PokemonRes } from '../model/PokemonRes';
import { PokemonsDTO } from './PokemonsDTO';

type Response<T> = {
  data: T;
};

export interface IPokemonsService {
  getPokemonsParam(): Promise<PokemonsDTO.Get.Output>;
}

export class PokemonsService implements IPokemonsService {
  private httpAdapter: HttpAdapter;

  constructor(httpAdapter: HttpAdapter) {
    this.httpAdapter = httpAdapter;
  }

  async getPokemonsParam(): Promise<PokemonsDTO.Get.Output> {
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    const res: Response<PokemonRes> = await this.httpAdapter.get({
      url,
    });
    return res.data;
  }
}
