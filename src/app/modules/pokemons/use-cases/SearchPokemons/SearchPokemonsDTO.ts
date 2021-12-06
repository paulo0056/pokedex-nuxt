/* eslint-disable camelcase */
import { AppError } from '../../../../core/base/AppError';
import { Either } from '../../../../core/base/Either';
import { Result } from '../../../../core/base/Result';

export namespace SearchPokemonsDTO {
  export interface Input {
    name: string;
  }
  export interface ResponseItem {
    name: string;
    id: string;
    weight: string;
    height: string;
    types: {
      slot: number;
      type: { name: string; url: string };
    }[];
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
  }

  export interface Request {
    input: Input;
  }
  export interface ResponseBody extends ResponseItem {}

  export type Response = Either<AppError.UnexpectedError, Result<ResponseBody>>;
}
