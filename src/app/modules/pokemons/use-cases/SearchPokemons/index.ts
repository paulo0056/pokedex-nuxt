import { PokemonsService } from '../../services/Pokemons';
import { PokemonsServiceMock } from '../../services/PokemonsMock';
import { HttpAdapter } from '../../../../core/adapter/HttpAdapter';
import { SearchPokemonsUseCase } from './SearchPokemonsUseCase';

const MOCK = process.env.MOCK_ENABLED === 'true';

const httpAdapter = new HttpAdapter();
const pokemonsService = MOCK
  ? new PokemonsServiceMock()
  : new PokemonsService(httpAdapter);

const searchPokemonsUseCase = new SearchPokemonsUseCase(pokemonsService);

export { searchPokemonsUseCase };
