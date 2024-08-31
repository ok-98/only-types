/**
 * Represents a type that can either be of type {@link T} or undefined.
 *
 * @template T - The type parameter.
 */
export type TOrUndefined<T> = T | undefined;

/**
 * Represents a type that can either be of type {@link T} or null.
 *
 * @template T - The type that can be nullable.
 */
export type TOrNull<T> = T | null;

/**
 * Represents a type that can be {@link null} or {@link undefined}.
 */
export type Nullish = null | undefined;

/**
 * Represents an optional value that can either be of type {@link T} or {@link Nullish}.
 * @template T - The type.
 */
export type Optional<T> = T | Nullish;

/**
 * Get the optional keys of a given type.
 *
 * @template T - The type to extract optional keys from.
 * @returns The optional keys of the given type.
 */
export type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
} extends { [_ in keyof T]: infer U }
  ? U
  : never;

/**
 * Get the required keys of a given type.
 *
 * @template T - The type to calculate the required keys for.
 * @param {T} - The type to calculate the required keys for.
 * @returns {U} - The required keys of the given type.
 */
export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
} extends { [_ in keyof T]: infer U }
  ? U
  : never;
