/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let perimeter = 0;
  
    for (let col = 0; col < grid.length; col++) {
      for (let row = 0; row < grid[col].length; row++) {
        if (grid[col][row]) {
          perimeter += 4;
          if (col > 0 && grid[col - 1][row]) perimeter -= 2;
          if (row > 0 && grid[col][row - 1]) perimeter -= 2;
        }
      }
    }
    return perimeter;
  };