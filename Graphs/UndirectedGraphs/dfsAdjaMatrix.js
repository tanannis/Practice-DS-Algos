/*  
     0 1 2
  0 [1,1,0],
  1 [1,1,0],
  2 [0,0,1]

  Each row index represents a vertex 
    If current vertex is not visited
      add it to visited
      dfs each of its connection (column)
  
  Loop each column to see if there's an edge (represents by 1)
    If yes, and this column index isn't in visited
      add it to visited
      dfs each of its connection (now the column becomes the row to search)
*/


// check Number of Provinces problem


const checkAdjMatrix = (matrix) => {
  let count = 0;
  let visited = {};
  
  // check each city
  for (let city = 0; city < matrix.length; city++) {
      if (!visited[city]) {
          visited[city] = true;
          count++;
          
          dfsConnection(matrix, city, visited);
      }
  }
  return count
};

const dfsConnection = (matrix, city, visited) => {
  for (let i = 0; i < matrix[city].length; i++) {
      if (matrix[city][i] === 1) {
          if (!visited[i]){
              visited[i] = true;
              
              city = i;
              dfsConnection(matrix, city, visited);
          }
      }
  }
}