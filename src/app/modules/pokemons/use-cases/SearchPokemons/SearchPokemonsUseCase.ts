import { UseCase } from '../../../../core/base/UseCase';
import { Result } from '../../../../core/base/Result';
import { left, right } from '../../../../core/base/Either';
import { AppError } from '../../../../core/base/AppError';
import { IPokemonsService } from '../../services/Pokemons';
import { SearchPokemonsDTO } from './SearchPokemonsDTO';

export class SearchPokemonsUseCase
  implements UseCase<SearchPokemonsDTO.Request, SearchPokemonsDTO.Response>
{
  private pokemonsService: IPokemonsService;

  constructor(pokemonsService: IPokemonsService) {
    this.pokemonsService = pokemonsService;
  }

  public async execute(
    dto: SearchPokemonsDTO.Request
  ): Promise<SearchPokemonsDTO.Response> {
    try {
      const call = await this.pokemonsService.SearchPokemonsParam(dto.input);
      const res = {
        ...call,
        name: call.name,
        id: call.id,
        weight: call.weight,
        height: call.height,
        types: call.types.map((t) => {
          return {
            slot: t.slot,
            type: { name: t.type.name, url: t.type.url },
          };
        }),
        stats: call.stats.map((stats) => {
          return {
            effort: stats.effort,
            base_stat: stats.base_stat,
            stat: { name: stats.stat.name, url: stats.stat.url },
          };
        }),
      };

      return right(Result.ok(res));
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }
  }
}
