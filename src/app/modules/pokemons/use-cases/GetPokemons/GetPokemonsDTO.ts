import { AppError } from '../../../../core/base/AppError';
import { Either } from '../../../../core/base/Either';
import { Result } from '../../../../core/base/Result';

export namespace GetPokemonsDTO {
  export interface ResponseItem {
    count: number;
    next: string;
    previous: null;
    results: {
      name: string;
      url: string;
    }[];
  }

  export interface ResponseBody extends ResponseItem {}

  export type Response = Either<AppError.UnexpectedError, Result<ResponseBody>>;
}
