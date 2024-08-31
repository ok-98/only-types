/**
 * Extracts the element type from an array type.
 * @template A - The array type.
 * @returns The element type of the array.
 */
export type ArrayElement<A> = A extends Array<infer Element> ? Element : never;

/**
 * Represents a type that can be either a single {@link Value} or an {@link Array} of {@link Value}.
 *
 * @template Value - The type of the value(s) in the array.
 */
export type ArrayLike<Value> = Value | Value[];
/**
 * Represents a type that can either be a single {@link Value} or a {@link Set} of {@link Value}.
 * @template Value The type of the values in the Set.
 */
export type SetLike<Value> = Value | Set<Value>;

/**
 * Represents a collection of values.
 * It can be an {@link Array}, a {@link Set}, or a {@link Map}.
 *
 * @template Value - The type of values in the collection.
 * @template Key - The type of keys in the map (optional).
 */
export type Collection<Value, Key = unknown> =
  | Value[]
  | Set<Value>
  | Map<Key, Value>;

/**
 * Represents a type that can either be a single {@link Value} or a {@link Collection} of {@link Value}.
 * @template Value - The type of the value(s) in the collection.
 * @template Key - The type of the key(s) used to access the value(s) in the collection.
 */
export type CollectionLike<Value, Key = unknown> =
  | Value
  | Collection<Value, Key>;

/**
 * Represents a non-empty {@link Array} type.
 * @template T - The type of elements in the array.
 */
export type NonEmptyArray<T> = ArrayWithAtLeast1<T>;

/**
 * Represents an array type with at least one element.
 * @template T - The type of the array elements.
 */
export type ArrayWithAtLeast1<T> = [T, ...T[]];

/**
 * Represents an array with at least two elements of type T.
 * @template T The type of elements in the array.
 */
export type ArrayWithAtLeast2<T> = [T, ...ArrayWithAtLeast1<T>];

/**
 * Represents an array with at least three elements of type T.
 * @template T The type of elements in the array.
 */
export type ArrayWithAtLeast3<T> = [T, ...ArrayWithAtLeast2<T>];

/**
 * Represents an array with at least four elements of type T.
 * @template T The type of elements in the array.
 */
export type ArrayWithAtLeast4<T> = [T, ...ArrayWithAtLeast3<T>];

/**
 * Represents a recursive {@link Array} that can contain values of type {@link T}, undefined, or other recursive arrays.
 * @template T - The type of values contained in the array.
 */
export type RecursiveArray<T> = T | undefined | Array<RecursiveArray<T>>;
