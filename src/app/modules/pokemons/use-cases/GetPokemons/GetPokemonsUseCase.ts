import { UseCase } from '../../../../core/base/UseCase';
import { Result } from '../../../../core/base/Result';
import { left, right } from '../../../../core/base/Either';
import { AppError } from '../../../../core/base/AppError';
import { IPokemonsService } from '../../services/Pokemons';
import { GetPokemonsDTO } from './GetPokemonsDTO';

export class GetPokemonsUseCase
  implements UseCase<undefined, GetPokemonsDTO.Response>
{
  // TODO: Import your services here
  private pokemonsService: IPokemonsService;

  constructor(pokemonsService: IPokemonsService) {
    this.pokemonsService = pokemonsService;
  }

  public async execute(): Promise<GetPokemonsDTO.Response> {
    try {
      const call = await this.pokemonsService.getPokemonsParam();
      const res = {
        ...call,
        results: call.results.map((t) => {
          return {
            name: t.name,
            url: t.url,
          };
        }),
      };
      /*  return {
          name: i.name,
          id: Number(i.id),
          weight: i.weight,
          height: i.height,
          types: i.types.map((t) => {
            return {
              name: t.type.name,
            };
          }),
          stats: i.stats.map((stats) => {
            return {
              baseStat: stats.base_stat,
              name: stats.stat.name,
            };
          }),
        }; */

      return right(Result.ok(res));
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }
  }
}
