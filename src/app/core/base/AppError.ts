/* eslint-disable no-console */
import { Result } from './Result';
import { UseCaseError } from './UseCaseError';

export namespace AppError {
  export class UnexpectedError extends Result<UseCaseError> {
    public constructor(err: any) {
      super(false, {
        message: 'generic_error',
        details: err?.response,
        httpCode: err?.status,
        error: err,
      } as UseCaseError);
      console.log(`[AppError]: An unexpected error occurred`);
      console.error(err);
    }

    public static create(err: any): UnexpectedError {
      return new UnexpectedError(err);
    }
  }
  export class TimeoutError extends Result<UseCaseError> {
    public constructor(err: any) {
      super(false, {
        message: 'timeout',
        details: err?.message,
        httpCode: 502,
        error: err,
      } as UseCaseError);
      console.log(`[AppError]: A timeout error occurred`);
      console.error(err);
    }

    public static create(err: any): TimeoutError {
      return new TimeoutError(err);
    }
  }
}
