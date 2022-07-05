/* Recursively DFS an undirected graph. Return every visited vertex in an array.

     "BKLYN"
     /  |   \
  "SI"  |   "QUEENS" - "LI"
     \  |   /
       "NYC"
*/

// Above undirected graph is represented by this Adjacency List / hash table
const adjacencyList = { 
  BKLYN: [ 'QUEENS', 'NYC', 'SI' ], 
  QUEENS: [ 'BKLYN', 'NYC', 'LI' ], 
  NYC: [ 'BKLYN', 'QUEENS', 'SI' ],
  SI: [ 'BKLYN', 'NYC' ],
  LI: [ 'QUEENS']
};     

/* 
  start with any vertex (it doesn't have a root like a tree)
  push vertex to result arr, and add it to visited map
  check each neighbor of vertex
  if neighbor isn't visited, recursively repeat above steps
 */
const traverseGraph = (vertex) => {
  const array = [];
  const visited = {};

  const recursiveDFS = (vertex) => {
    if (!vertex) return array; 
    array.push(vertex);
    visited[vertex] = true;
    for (const neighbor of adjacencyList[vertex]) {
      if (!visited[neighbor]) recursiveDFS(neighbor);
    }
  }

  recursiveDFS(vertex);
  return array;
}

console.log(traverseGraph("NYC"))