/**
 * Represents a set of braces.
 * A brace is defined as an opening and closing character pair.
 * It can be one of the following types:
 * - `{` and `}`
 * - `[` and `]`
 * - `(` and `)`
 * - `<` and `>`
 * - A custom pair of opening and closing characters specified as a string.
 */
export type Braces =
  | ['{', '}']
  | ['[', ']']
  | ['(', ')']
  | ['<', '>']
  | [string, string];

/**
 * Represents a quotation mark.
 * It can be one of the following characters: "'", '"', '`', '´'.
 */
export type Quotation = "'" | '"' | '`' | '´';

/**
 * Represents a single number string.
 * It can only have values from '0' to '9'.
 */
export type SingleNumberString =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9';

/**
 * Represents a single number type.
 * It can only be one of the following values: 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9.
 */
export type SingleNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * Represents the type for hexadecimal characters in lowercase.
 * Valid characters are 'a', 'b', 'c', 'd', 'e', and 'f'.
 */
type HexCharactersSmall = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
/**
 * Represents the set of hexadecimal characters from 'A' to 'F'.
 */
type HexCharactersBig = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

/**
 * Represents a hex character.
 * It can be either a single number string, a small hex character, or a big hex character.
 */
export type HexCharacter =
  | SingleNumberString
  | HexCharactersSmall
  | HexCharactersBig;
