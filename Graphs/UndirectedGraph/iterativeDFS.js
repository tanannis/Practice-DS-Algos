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
  use a stack to remember what to check next

  while there's item in stack
    set current vertex by poping from stack (poping is faster than shifting since order doesn't matter for this graph)
    if current is visited, skip below steps.
    push current vertex to result arr
    add it to visited map
    check each neighbor of current vertex
    if neighbor isn't visited, add it to stack
 */
const traverseGraph = (vertex) => {
  const array = [];
  const visited = {};
  const stack = [vertex];  

  while (stack.length) {
    const current = stack.pop();  
    if (visited[current]) continue;

    array.push(current);        
    visited[current] = true;    
    for (const neighbor of adjacencyList[current]) {
      if (!visited[neighbor]) stack.push(neighbor); 
    }
  }

  return array;
}

console.log(traverseGraph("BKLYN"))