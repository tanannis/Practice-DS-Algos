/* BFS an undirected graph. Return every visited vertex in an array.

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
  use a queue to remember what to check next because for BFS, 
  it's important that we visit current vertex's nearest neighbor first before exploring further

  while there's item in queue
    set current vertex by shifting from queue
    push current vertex to result arr
    check each neighbor of current vertex
    if neighbor isn't visited, add it to queue and to visited map
 */
const traverseGraph = (vertex) => {
  const array = [];
  const visited = {};
  const queue = [vertex]; 
  visited[vertex] = true;  

  while (queue.length) {      
    const current = queue.shift();  
    array.push(current);        

    for (const neighbor of adjacencyList[current]) {
      if (!visited[neighbor]) {   
        visited[neighbor] = true;   
        queue.push(neighbor);     
      }
    }
  }

  return array;
}

console.log(traverseGraph("NYC")) // [ NYC, BKLYN, QUEENS, SI, LI]