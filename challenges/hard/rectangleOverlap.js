const rectangleAreaFromCoords = require("../medium/rectangleAreaFromCoords.js");
/*
 * This is intended to be a challenge for any squad who gets finished with everything else.
 * If you haven't done the other challenges, try those first!
 *
 * Imagine you have two rectangles with horizontal bases. If you draw them on the same grid,
 * they would overlap! Each rectangle is described by an array of coordinates, for example:
 * [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }]
 * Can you write a function which calculates the area of the overlap between two rectangles?
 *
 */

/**
 * Given the four corners of two rectangles, find the area of their overlap.
 * If they don't overlap, return 0.
 * @param {{x: number, y: number}[]} rectangle1 - The four corners of rectangle 1
 * @param {{x: number, y: number}[]} rectangle2 - The four corners of rectangle 2
 */
// function rectangleOverlap(rectangle1, rectangle2) {
//   return rectangleAreaFromCoords(rectangle1) != 0 ||
//     rectangleAreaFromCoords(rectangle2) != 0
//     ? rectangleAreaFromCoords(rectangle1) / rectangleAreaFromCoords(rectangle2)
//     : 0;
// }

function rectangleOverlap(rectangle1, rectangle2) {
  [A1, B1, C1, D1] = rectangle1;
  [A2, B2, C2, D2] = rectangle2;

  rect1 = {
    left: Math.abs(D1.y - A1.y),
    right: Math.abs(B1.y - C1.y),
    top: Math.abs(C1.x - D1.x),
    bottom: Math.abs(A1.x - B1.x),
  };

  rect2 = {
    left: Math.abs(D2.y - A2.y),
    right: Math.abs(B2.y - C2.y),
    top: Math.abs(C2.x - D2.x),
    bottom: Math.abs(A2.x - B2.x),
  };

  console.log("rect1", rect1);
  console.log("rect2", rect2);

  x_overlap = Math.max(
    0,
    Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left)
  );
  y_overlap = Math.max(
    0,
    Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top)
  );
  return x_overlap * y_overlap;
}

module.exports = rectangleOverlap;
