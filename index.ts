type ResultType<T> = {
  isOk(): this is Ok<T>;
  isErr(): this is Err<T>;
  unwrap(): T | Promise<T>;
  unwrapErr(): Error;
};

class Ok<T> implements ResultType<T> {
  constructor(private value: T | Promise<T>) {}
  isOk(): this is Ok<T> {
    return true;
  }
  isErr(): this is Err<T> {
    return false;
  }
  unwrap(): T | Promise<T> {
    return this.value;
  }
  unwrapErr(): Error {
    throw new Error("Called unwrapErr on Ok");
  }
}

class Err<T> implements ResultType<T> {
  constructor(private error: Error) {}
  isOk(): this is Ok<T> {
    return false;
  }
  isErr(): this is Err<T> {
    return true;
  }
  unwrap(): T | Promise<T> {
    throw this.error;
  }
  unwrapErr(): Error {
    return this.error;
  }
}

export const Result = {
  ok<T>(value: T | Promise<T>): ResultType<T> {
    return new Ok<T>(value);
  },
  err<T = unknown>(error: Error | string): ResultType<T> {
    const errInstance = typeof error === 'string' ? new Error(error) : error;
    return new Err<T>(errInstance);
  }
};
