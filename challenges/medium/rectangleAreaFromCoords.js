/**
 * Find the area of a rectangle given the four corners.
 * The base of the rectangle is assumed to be horizontal.
 * Note: The corners can be given in any order.
 * @param {{ x: number, y: number }[]} points - an array of 4 points, e.g. { x: 3, y: 5 }
 * @return {number} the area
 */

function rectangleAreaFromCoords(points) {
  [A, B, C, D] = points;
  // weird formula I made up:
  //  A: 0
  //  B: 1
  //  C: 2
  //  D: 3
  // (D.x - B.x) * (D.y - A.y)
  // then do Math.abs() to make poitive always
  return Math.abs((points[3].x - points[1].x) * (points[3].y - points[0].y));
}

module.exports = rectangleAreaFromCoords;
