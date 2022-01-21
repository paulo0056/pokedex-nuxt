import { PokemonDetail } from '../model/PokemonRes';
import { IPokemonsService } from './Pokemons';
export class PokemonsServiceMock implements IPokemonsService {
  async getPokemonsParam(): Promise<any> {
    const returnBody: any = {};

    return await new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(returnBody);
        }, 1000);
      } catch (err) {
        return reject(err);
      }
    });
  }

  async SearchPokemonsParam(dto: any): Promise<PokemonDetail> {
    const returnBody: PokemonDetail = {
      name: 'charizard',
      id: '1',
      weight: '50',
      height: '70',
      types: [
        {
          slot: 14,
          type: {
            name: 'nome',
            url: 'url',
          },
        },
      ],
      stats: [
        {
          base_stat: 40,
          effort: 23,
          stat: { name: 'status', url: 'url' },
        },
      ],
    };

    return await new Promise((resolve, reject) => {
      if (!dto) {
        return reject(new Error('Nome esta vazio'));
      }
      try {
        setTimeout(() => {
          resolve(returnBody);
        }, 1000);
      } catch (err) {
        return reject(err);
      }
    });
  }
}
