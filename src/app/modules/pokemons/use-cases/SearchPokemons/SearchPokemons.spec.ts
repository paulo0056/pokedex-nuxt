import { searchPokemonsUseCase } from './index';

describe('Use Case: SearchPokemons/SearchPokemonsUseCase', () => {
  beforeAll(() => {});

  test('My first test', async () => {
    const res = await searchPokemonsUseCase.execute({
      input: { name: 'pikachu' },
    });

    expect(res.isRight()).toBe(true);
    expect(res.value.getValue()).toBeDefined();

    if (res.isRight()) {
      expect(res.value.getValue().id).toBe(25);
    }
  });
});
