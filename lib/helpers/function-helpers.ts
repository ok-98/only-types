import { PromiseOrAwaited } from './type-helpers.ts';

/**
 * Represents a simple function that takes a parameter of type P and returns a value of type R.
 * @template P The type of the parameter.
 * @template R The type of the return value.
 * @param value The value of type P to be passed to the function.
 * @returns The result of applying the function to the given value.
 */
export type SimpleFunction<P, R = void> = (value: P) => R;

/**
 * Represents an empty function that takes no arguments and returns a value of type R.
 *
 * @template R - The return type of the function.
 */
export type EmptyFunction<R = void> = () => R;

/**
 * Represents any function that takes any number of arguments and returns a value of type R.
 * @template R The return type of the function.
 */
export type AnyFunction<R = void, Args = any> = (...args: Args[]) => R;

/**
 * Extracts the first parameter type from a function type.
 * @template F - The function type.
 * @returns The parameter type of the function.
 */
export type Param<F extends (...args: any) => any> = F extends (
  param: infer P,
  ...args: any[]
) => any
  ? P
  : never;

/**
 * Extracts the first parameter type from a function type.
 * @template F - The function type.
 * @returns The parameter type of the function.
 */
export type Param1<F extends (...args: any) => any> = Param<F>;

/**
 * Extracts the second parameter type from a function type.
 * @template F - The function type.
 * @returns The parameter type of the function.
 */
export type Param2<F extends (...args: any) => any> = F extends (
  _0: any,
  param: infer P,
  ...args: any[]
) => any
  ? P
  : never;
/**
 * Extracts the third parameter type from a function type.
 * @template F - The function type.
 * @returns The parameter type of the function.
 */
export type Param3<F extends (...args: any) => any> = F extends (
  _0: any,
  _1: any,
  param: infer P,
  ...args: any[]
) => any
  ? P
  : never;

/**
 * Extracts the fourth parameter type from a function type.
 * @template F - The function type.
 * @returns The parameter type of the function.
 */
export type Param4<F extends (...args: any) => any> = F extends (
  _0: any,
  _1: any,
  _2: any,
  param: infer P,
  ...args: any[]
) => any
  ? P
  : never;

/**
 * Extracts the fifth parameter type from a function type.
 * @template F - The function type.
 * @returns The parameter type of the function.
 */
export type Param5<F extends (...args: any) => any> = F extends (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  param: infer P,
  ...args: any[]
) => any
  ? P
  : never;

/**
 * Extracts the sixth parameter type from a function type.
 * @template F - The function type.
 * @returns The parameter type of the function.
 */
export type Param6<F extends (...args: any) => any> = F extends (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  _4: any,
  param: infer P,
  ...args: any[]
) => any
  ? P
  : never;

/**
 * Extracts the seventh parameter type from a function type.
 * @template F - The function type.
 * @returns The parameter type of the function.
 */
export type Param7<F extends (...args: any) => any> = F extends (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  _4: any,
  _5: any,
  param: infer P,
  ...args: any[]
) => any
  ? P
  : never;

/**
 * Extracts the eighth parameter type from a function type.
 * @template F - The function type.
 * @returns The parameter type of the function.
 */
export type Param8<F extends (...args: any) => any> = F extends (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  _4: any,
  _5: any,
  _6: any,
  param: infer P,
  ...args: any[]
) => any
  ? P
  : never;

/**
 * Extracts the ninth parameter type from a function type.
 * @template F - The function type.
 * @returns The parameter type of the function.
 */
export type Param9<F extends (...args: any) => any> = F extends (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  _4: any,
  _5: any,
  _6: any,
  _7: any,
  param: infer P,
  ...args: any[]
) => any
  ? P
  : never;

/**
 * Extracts the tenth parameter type from a function type.
 * @template F - The function type.
 * @returns The parameter type of the function.
 */
export type Param10<F extends (...args: any) => any> = F extends (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  _4: any,
  _5: any,
  _6: any,
  _7: any,
  _8: any,
  param: infer P,
  ...args: any[]
) => any
  ? P
  : never;

/**
 * Extracts the parameter types from a function type.
 * @template F - The function type.
 * @returns An array of parameter types.
 */
export type ParamArgs<F extends (...args: any) => any> = F extends (
  ...args: Array<infer P>
) => any
  ? P
  : never;

/**
 * Extracts the parameter types from a constructor function type.
 * @template C - The constructor function type.
 * @returns The parameter types of the constructor function.
 */
export type CtorParamArgs<C extends new (...args: any) => any> = C extends new (
  ...args: Array<infer P>
) => any
  ? P
  : never;

/**
 * Extracts the constructor parameters from a class constructor type.
 * @template C - The class constructor type.
 * @returns The constructor parameters as a tuple.
 */
export type CtorParameters<C extends new (...args: any) => any> =
  C extends new (...args: infer P) => any ? P : never;

/**
 * Extracts the first parameter type from a constructor function type.
 * @template C - The constructor function type.
 * @returns The parameter type of the constructor function.
 */
export type CtorParam<C extends new (...args: any) => any> = CtorParam1<C>;

/**
 * Extracts the first parameter type from a constructor function type.
 * @template C - The constructor function type.
 * @returns The parameter type of the constructor function.
 */
export type CtorParam1<C extends new (...args: any) => any> = C extends new (
  param: infer P,
  ...args: any
) => any
  ? P
  : never;

/**
 * Extracts the type of the second constructor parameter from a given class.
 * @template C - The class type.
 * @returns The type of the second constructor parameter.
 */
export type CtorParam2<C extends new (...args: any) => any> = C extends new (
  _0: any,
  param: infer P,
  ...args: any
) => any
  ? P
  : never;

/**
 * Extracts the third parameter type from a constructor function type.
 *
 * @template C - The constructor function type.
 * @returns The type of the third parameter of the constructor function, or `never` if it doesn't exist.
 */
export type CtorParam3<C extends new (...args: any) => any> = C extends new (
  _0: any,
  _1: any,
  _2: any,
  param: infer P,
  ...args: any
) => any
  ? P
  : never;

/**
 * Extracts the fourth parameter type from a constructor function type.
 *
 * @template C - The constructor function type.
 * @returns The type of the fourth parameter of the constructor function, or `never` if it doesn't exist.
 */
export type CtorParam4<C extends new (...args: any) => any> = C extends new (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  param: infer P,
  ...args: any
) => any
  ? P
  : never;

/**
 * Extracts the fifth parameter type from a constructor function type.
 *
 * @template C - The constructor function type.
 * @returns The type of the fifth parameter of the constructor function, or `never` if it doesn't exist.
 */
export type CtorParam5<C extends new (...args: any) => any> = C extends new (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  _4: any,
  param: infer P,
  ...args: any
) => any
  ? P
  : never;

/**
 * Extracts the sixth parameter type from a constructor function type.
 *
 * @template C - The constructor function type.
 * @returns The type of the sixth parameter of the constructor function, or `never` if it doesn't exist.
 */
export type CtorParam6<C extends new (...args: any) => any> = C extends new (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  _4: any,
  _5: any,
  param: infer P,
  ...args: any
) => any
  ? P
  : never;

/**
 * Extracts the seventh parameter type from a constructor function type.
 *
 * @template C - The constructor function type.
 * @returns The type of the seventh parameter of the constructor function, or `never` if it doesn't exist.
 */
export type CtorParam7<C extends new (...args: any) => any> = C extends new (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  _4: any,
  _5: any,
  _6: any,
  param: infer P,
  ...args: any
) => any
  ? P
  : never;

/**
 * Extracts the eighth parameter type from a constructor function type.
 *
 * @template C - The constructor function type.
 * @returns The type of the eighth parameter of the constructor function, or `never` if it doesn't exist.
 */
export type CtorParam8<C extends new (...args: any) => any> = C extends new (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  _4: any,
  _5: any,
  _6: any,
  _7: any,
  param: infer P,
  ...args: any
) => any
  ? P
  : never;

/**
 * Extracts the ninth parameter type from a constructor function type.
 *
 * @template C - The constructor function type.
 * @returns The type of the ninth parameter of the constructor function, or `never` if it doesn't exist.
 */
export type CtorParam9<C extends new (...args: any) => any> = C extends new (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  _4: any,
  _5: any,
  _6: any,
  _7: any,
  _8: any,
  param: infer P,
  ...args: any
) => any
  ? P
  : never;

/**
 * Extracts the tenth parameter type from a constructor function type.
 *
 * @template C - The constructor function type.
 * @returns The type of the tenth parameter of the constructor function, or `never` if it doesn't exist.
 */
export type CtorParam10<C extends new (...args: any) => any> = C extends new (
  _0: any,
  _1: any,
  _2: any,
  _3: any,
  _4: any,
  _5: any,
  _6: any,
  _7: any,
  _8: any,
  _9: any,
  param: infer P,
  ...args: any
) => any
  ? P
  : never;

/**
 * Promisifies a function type.
 *
 * @template F - The function type to be promisified.
 * @returns A new function type that returns a Promise.
 */
export type Promisify<F extends (...args: any[]) => any> = (
  ...args: Parameters<F>
) => Promise<ReturnType<F>>;

/**
 * Represents a function that can be either asynchronous or synchronous.
 * @template F - The type of the function.
 * @param args - The arguments of the function.
 * @returns The return type of the function, which can be either a direct value or a promise.
 */
export type AsyncFunctionOrNot<
  F extends (...args: any[]) => PromiseOrAwaited<any>,
> = (...args: Parameters<F>) => ReturnType<F> | Awaited<ReturnType<F>>;
