/**
 * Returns coordinates of the corners anti-clockwise from bottom-left (assumes base is horizontal)
 * @param {number} a - the base
 * @param {number} b - the height
 * @param {Object} point - the bottom left point
 * @param {number} point.x - the x coordinate
 * @param {number} point.y - the y coordinate
 * @returns {Object[]} the corners
 */

function getRectangleCorners(a, b, point) {
  // get the bottom left point
  const pointBL = {
    x: point.x,
    y: point.y,
  };

  // get the bottom right point
  const pointBR = {
    x: point.x + a,
    y: point.y,
  };
  // then the top right
  const pointTR = {
    x: point.x + a,
    y: point.y + b,
  };
  // then the top left
  const pointTL = {
    x: point.x,
    y: point.y + b,
  };
  // and return them as an array of points
  return [pointBL, pointBR, pointTR, pointTL];
}

module.exports = getRectangleCorners;
