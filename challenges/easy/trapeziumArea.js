/**
 * Calculates the area of a trapezium: https://www.google.com/search?q=area+of+trapezium
 * @param {number} a - the length of one side
 * @param {number} b - the length of the other side
 * @param {number} h - the height of the trapezium
 * @returns {number} the area
 */

function trapeziumArea(a, b, h) {
  return ((a + b) / 2) * h;
}

module.exports = trapeziumArea;
