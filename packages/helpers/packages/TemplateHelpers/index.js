// @todo: in next release we should make a config package to let the users use configs also
// import theme from '../../../ui/packages/Theme/src/theme'

/**
 * @function
 * @name hexToRgb
 * @description Convert hex color to rgb color
 * @param hex
 * @returns {{red: number, green: number, blue: number}}
 */
export const hexToRgb = hex => {
  if (!hex) {
    return { red: 0, green: 0, blue: 0 };
  }

  const hexColor = hex.replace('#', '');
  return {
    red: parseInt(hexColor.substr(0, 2), 16),
    green: parseInt(hexColor.substr(2, 2), 16),
    blue: parseInt(hexColor.substr(4, 2), 16),
  };
};

/**
 * @function
 * @name defineForegroundColor
 * @description Decide between dark or light color based on background color brightness
 * @param backgroundColor   {string}    background color in hex
 * @returns {string}
 */
export const defineForegroundColor = backgroundColor => {
  const rgb = hexToRgb(backgroundColor);
  const average = (rgb.red * 299 + rgb.green * 587 + rgb.blue * 114) / 1000;
  return average > 128 ? 'taupe' : 'white';
};

/**
 * @function
 * @name makeRgba
 * @description Make an rgba color suitable for CSS from a hex color
 * @param opacity
 * @param color
 * @returns {string}
 */
export const makeRgba = (opacity, color) => {
  const rgb = hexToRgb(color);
  return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${opacity})`;
};

/**
 * @function
 * @name decideMeasurement
 * @description Decide
 * @param measurement what measurement to use, given measurement or multiplying it in rem unit
 * @returns {string}
 */
export const decideMeasurement = measurement => {
  const defaultRem = '1rem'; // @todo: gonna remove it in next release
  return typeof measurement === 'string'
    ? measurement
    : `calc(${defaultRem} * ${measurement})`;
};

/**
 * @function
 * @name makeShadow
 * @description returns a shadow suitable for css
 * @param   hOffset   {number|string}    horizontal offset of shadow, wil be multiplied in rem
 * @param   vOffset   {number|string}    vertical offset of shadow, wil be multiplied in rem
 * @param   blur      {number|string}    blur of the shadow, wil be multiplied in rem
 * @param   spread    {number|string}    spread of the shadow, wil be multiplied in rem
 * @param   color     {string}    color of the shadow
 * @param   inset     {boolean}    blur of the shadow, wil be multiplied in rem
 * @returns {string}
 */
export const makeShadow = (
  hOffset,
  vOffset,
  blur,
  spread,
  color,
  inset = false,
) =>
  `${decideMeasurement(hOffset)} ${decideMeasurement(
    vOffset,
  )} ${decideMeasurement(blur)} ${decideMeasurement(spread)} ${color}${
    inset ? ' inset' : ''
  }`;
