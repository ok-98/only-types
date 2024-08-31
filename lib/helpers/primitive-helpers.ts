import { type Optional } from './nullish-helpers.ts';

/**
 * Represents a primitive type in TypeScript.
 * A primitive can be one of the following types: number, string, boolean, bigint, or symbol.
 */
export type Primitive = number | string | boolean | bigint | symbol;

/**
 * Represents a type that can be either a primitive value (number, string, boolean, bigint, symbol)
 * or null or undefined.
 */
export type PrimitiveNullish = Optional<
  number | string | boolean | bigint | symbol
>;
