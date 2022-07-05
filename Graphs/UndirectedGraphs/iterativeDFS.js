/* Iteratively DFS an undirected graph. Return every visited vertex in an array.

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
  use a stack to store the whole path of a vertex, 
  then pop the furthest neighbor out because for DFS we explore the depth first 

  while there's item in stack
    set current vertex by poping from stack
    push current vertex to result arr
    check each neighbor of current vertex
    if neighbor isn't visited, add it to stack and to visited map
 */
const traverseGraph = (vertex) => {
  const array = [];
  const visited = {};
  const stack = [vertex]; 
  visited[vertex] = true;  

  while (stack.length) {      
    const current = stack.pop();  // NYC, SI, QUEENS, LI, BKLYN
    array.push(current);        // [ NYC, SI, QUEENS, LI, BKLYN ]

    for (const neighbor of adjacencyList[current]) {
      if (!visited[neighbor]) {   
        visited[neighbor] = true;   // { NYC, BKLYN, QUEENS, SI, LI }
        stack.push(neighbor);     // [  ]
      }
    }
  }

  return array;
}

console.log(traverseGraph("NYC"))