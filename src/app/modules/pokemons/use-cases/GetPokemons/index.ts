import { PokemonsService } from '../../services/Pokemons';
import { PokemonsServiceMock } from '../../services/PokemonsMock';
import { HttpAdapter } from '../../../../core/adapter/HttpAdapter';
import { GetPokemonsUseCase } from './GetPokemonsUseCase';

const MOCK = process.env.MOCK_ENABLED === 'true';

const httpAdapter = new HttpAdapter();
const pokemonsService = MOCK
  ? new PokemonsServiceMock()
  : new PokemonsService(httpAdapter);

const getPokemonsUseCase = new GetPokemonsUseCase(pokemonsService);

export { getPokemonsUseCase };
