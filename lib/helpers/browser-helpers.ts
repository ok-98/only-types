import { HexCharacter } from './string-helpers.ts';

/**
 * Represents the name of a CSS variable.
 * @typedef {`--${string}`} CssVarName
 */
export type CssVarName = `--${string}`;

/**
 * Represents a CSS variable.
 * @typedef {`var(${CssVarName})`} CssVar
 */
export type CssVar = `var(${CssVarName})`;

/**
 * Represents the available CSS length units.
 */
export type CssLengthUnits =
  | 'px'
  | 'em'
  | 'rem'
  | 'vh'
  | 'vw'
  | '%'
  | 'fr'
  | 'ch'
  | 'ex'
  | 'cm'
  | 'mm'
  | 'in'
  | 'pt'
  | 'pc';

/**
 * Represents the basic CSS values that can be used in stylesheets.
 * These values include 'initial', 'inherit', and 'unset'.
 */
export type CssBasicValues = 'initial' | 'inherit' | 'unset';

/**
 * Represents the type for CSS length values.
 * It can be one of the predefined CSS length units, a string, a number, or never.
 */
type CssLengthType = CssLengthUnits | string | number | never;

/**
 * Represents a CSS length value with type safety.
 * @template T - The type of the CSS length unit.
 */
export type CssLength<T extends CssLengthType = never> =
  | 'auto'
  | CssBasicValues
  | 0
  | T extends CssLengthUnits
  ? `${number}${T}`
  : T extends string
    ? CssVar
    : T extends number
      ? number
      : never;

/**
 * Represents a pair of CSS lengths of the same type.
 * @template T - The type of CSS length.
 */
export type CssTwoLengths<T extends CssLengthType> =
  `${CssLength<T>} ${CssLength<T>}`;
/**
 * Represents a CSS property value consisting of four lengths of type T.
 * @template T - The type of the CSS length.
 */
export type CssFourLengths<T extends CssLengthType> =
  `${CssLength<T>} ${CssLength<T>} ${CssLength<T>} ${CssLength<T>}`;

/**
 * Represents the available operators for CSS calc() function.
 */
export type CssCalcOperator = '+' | '-' | '*' | '/';
/**
 * Represents a CSS calculation operation value.
 * It can be a number, a CSS variable, or a combination of a number and CSS length units.
 */
type CssCalcOperationValue =
  `${number | CssVar | `${number}${CssLengthUnits}`}`;
/**
 * Represents the base of a CSS calc operation.
 * It is a string that follows the format `${CssCalcOperator} ${CssCalcOperationValue}`.
 */
type CssCalcOperationBase = `${CssCalcOperator} ${CssCalcOperationValue}`;

/**
 * Represents a CSS simple calculation operation.
 * It can be either a single operation or a combination of two operations.
 */
export type CssSimpleCalcOperation =
  | `calc(${CssCalcOperationValue} ${CssCalcOperationBase})`
  | `calc(${CssCalcOperationValue} ${CssCalcOperationBase} ${CssCalcOperationBase})`;

/**
 * Represents a CSS generic calc operation.
 * The operation is defined as a string wrapped in the `calc()` function.
 */
export type CssGenericCalcOperation = `calc(${string})`;

/**
 * Represents a CSS color in hexadecimal format.
 * It can be either a 6-digit hexadecimal color code or a CSS variable.
 */
export type CssColorHex =
  | `#${HexCharacter}${HexCharacter}${HexCharacter}${HexCharacter[number]}`
  | `#${CssVar}`;

/**
 * Represents a type that can be either a number, a CSS variable, or a CSS generic calculation operation.
 */
type NumberOrVar = number | CssVar | CssGenericCalcOperation;
/**
 * Represents a type that can be either a percentage value or a CSS variable.
 *
 * @typedef {`${number | CssGenericCalcOperation}%` | CssVar} PercentOrVar
 */
type PercentOrVar = `${number | CssGenericCalcOperation}%` | CssVar;

/**
 * Represents a CSS color in RGB format.
 *
 * @remarks
 * The `CssColorRgb` type can have the following formats:
 * - `rgb(NumberOrVar, NumberOrVar, NumberOrVar)`
 * - `rgb(NumberOrVar NumberOrVar NumberOrVar)`
 * - `rgb(CssVar)`
 * - `rgb(NumberOrVar, NumberOrVar, NumberOrVar / NumberOrVar)`
 *
 * @example
 * // Valid `CssColorRgb` values
 * const color1: CssColorRgb = 'rgb(255, 0, 0)';
 * const color2: CssColorRgb = 'rgb(255 0 0)';
 * const color3: CssColorRgb = 'rgb(var(--primary-color))';
 * const color4: CssColorRgb = 'rgb(255, 0, 0 / 0.5)';
 *
 * @typedef CssColorRgb
 */
export type CssColorRgb =
  | `rgb(${`${NumberOrVar}, ${NumberOrVar}, ${NumberOrVar}` | `${NumberOrVar} ${NumberOrVar} ${NumberOrVar}` | `${CssVar}`})`
  | `rgb(${`${NumberOrVar}, ${NumberOrVar}, ${NumberOrVar}` | `${NumberOrVar} ${NumberOrVar} ${NumberOrVar}` | `${CssVar}`} / ${NumberOrVar})`;

/**
 * Represents a CSS color value in HSL or HWB format.
 *
 * @typedef {string} CssColorHslHwb
 * @description The color value can be in the following formats:
 * - `hsl(hue, saturation, lightness)` or `hsl(hue saturation lightness)` or `hsl(var(--css-variable))`
 * - `hsl(hue, saturation, lightness / alpha)`
 */
export type CssColorHslHwb =
  | `hsl(${`${NumberOrVar}, ${PercentOrVar}, ${PercentOrVar}` | `${NumberOrVar} ${PercentOrVar} ${PercentOrVar}` | `${CssVar}`})`
  | `hsl(${`${NumberOrVar}, ${PercentOrVar}, ${PercentOrVar}` | `${NumberOrVar} ${PercentOrVar} ${PercentOrVar}` | `${CssVar}`} / ${NumberOrVar})`;

/**
 * Represents a CSS color in the Lab color space.
 */
export type CssColorLab =
  | `lab(${`${PercentOrVar}, ${NumberOrVar}, ${NumberOrVar}` | `${PercentOrVar} ${NumberOrVar} ${NumberOrVar}` | `${CssVar}`})`
  | `lab(${`${PercentOrVar}, ${NumberOrVar}, ${NumberOrVar}` | `${PercentOrVar} ${NumberOrVar} ${NumberOrVar}` | `${CssVar}`} / ${NumberOrVar})`;

/**
 * Represents the system colors available for CSS styling in a browser.
 */
export type CssSystemColors =
  | 'ActiveBorder'
  | 'ActiveCaption'
  | 'Background'
  | 'Canvas'
  | 'CanvasText'
  | 'LinkText'
  | 'VisitedText';

/**
 * Represents a list of CSS named colors.
 */
export type CssNamedColors =
  | 'transparent'
  | 'currentColor'
  | 'black'
  | 'silver'
  | 'gray'
  | 'white'
  | 'maroon'
  | 'red'
  | 'purple'
  | 'fuchsia'
  | 'green'
  | 'lime'
  | 'olive'
  | 'yellow'
  | 'navy'
  | 'blue'
  | 'teal'
  | 'aqua'
  | 'orange'
  | 'aliceblue'
  | 'antiquewhite'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'blanchedalmond'
  | 'blueviolet'
  | 'brown'
  | 'burlywood'
  | 'cadetblue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerblue'
  | 'cornsilk'
  | 'crimson'
  | 'cyan'
  // etc. ... //will be added
  | string;

/**
 * Represents a base type for CSS colors.
 * It can be one of the following types:
 * - CssSystemColors
 * - CssNamedColors
 * - CssBasicValues
 * - CssVar
 * - CssColorRgb
 * - CssColorHslHwb
 * - CssColorLab
 * - CssColorHex
 */
type CssColorBase =
  | CssSystemColors
  | CssNamedColors
  | CssBasicValues
  | CssVar
  | CssColorRgb
  | CssColorHslHwb
  | CssColorLab
  | CssColorHex;

/**
 * Represents a CSS color value.
 * It can be a base color, a color function, or a color mixing function.
 */
export type CssColor =
  | CssColorBase
  | `color(${CssColorBase | string})`
  | `color-mix(${string})`
  | `light-dark(${string}, ${string})`;
