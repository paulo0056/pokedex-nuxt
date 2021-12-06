import { UseCaseError } from '../../../../core/base/UseCaseError';
import { Result } from '../../../../core/base/Result';

export namespace GetPokemonsErrors {
  export class NotFoundError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Couldn't find the item.`,
      } as UseCaseError);
    }
  }
}
