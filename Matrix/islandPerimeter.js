/*  https://leetcode.com/problems/island-perimeter/
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter means total of 16 sides

Input: grid = [[1]]   Output: 4

Input: grid = [[1,0]]   Output: 4
*/

/*
Each land has 4 sides, each side is length of 1

iterate grid for each row
  iterate each row for column
    if column is a land, should have 4 sides
    get its neighbors from up, down, left right
    for each exist neighbor, subtract 1 side 
    add actual sides to perimeter
*/
const islandPerimeter = (grid) => {
  let perimeter = 0;
    
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 1) {
              const neighbors = getNeighbors(grid, i, j);
              // each land has 4 sides
              perimeter += 4 - neighbors;
          }
      }
  } 
    
  return perimeter;
};

const getNeighbors = (grid, row, col) => {
    let count = 0;
    
    // up
    if (grid[row - 1] && grid[row - 1][col] === 1) count++;
        
    // down
    if (grid[row + 1] && grid[row + 1][col] === 1) count++;    
        
    // left
    if (grid[row][col - 1] && grid[row][col - 1] === 1) count++;
        
    // right
    if (grid[row][col + 1] && grid[row][col + 1] === 1) count++;
    
    return count;
}