import { getPokemonsUseCase } from './index';

describe('Use Case: GetPokemons/GetPokemonsUseCase', () => {
  beforeAll(() => {});

  test('My first test', async () => {
    // TODO: put your logic

    const res = await getPokemonsUseCase.execute();

    expect(res.isRight()).toBe(true);
    expect(res.value.getValue()).toBeDefined();

    if (res.isRight()) {
      expect(res.value.getValue().count).toBe(1118);
    }
  });
});
