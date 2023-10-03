const trianglePerimeter = require("../easy/trianglePerimeter.js");

/**
 * Uses Heron's formula (https://en.wikipedia.org/wiki/Heron%27s_formula) to give the area of a triangle
 * with sides a,b,c. The triangle isn't assumed to be a right-triangle.
 * @param {number} a - side a
 * @param {number} b - side b
 * @param {number} c - side c
 * @returns {number} the area
 */

function triangleAreaFromSides(a, b, c) {
  const perimeter = trianglePerimeter(a, b, c) / 2;
  const area = Math.sqrt(
    (perimeter - a) * (perimeter - b) * (perimeter - c) * perimeter
  );
  return area;
}

module.exports = triangleAreaFromSides;
