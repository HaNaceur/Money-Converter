/* eslint-disable import/prefer-default-export */

export function roundAtDecimal(number, decimal) {
    const pow = 10 ** decimal;
    return Math.round(number * pow) / pow;
  }
  