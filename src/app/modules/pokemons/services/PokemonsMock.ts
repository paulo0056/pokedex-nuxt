import { IPokemonsService } from './pokemons';

export class PokemonsServiceMock implements IPokemonsService {
  async getPokemonsParam(): Promise<any> {
    const returnBody: any = {
      emailExpirationDay: '30',
      periodicityHour: '60',
      orderExpirationDays: '90',
    };

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
}
