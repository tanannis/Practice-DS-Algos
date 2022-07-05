/* Dijkstra basic: Find the shortest path from A to E
                        4
                 [A]--------[B]
               2 /            \ 3
                /  2      3    \
             [C]-----[D]-------[E]
                \     | 1      / 
               4 \    |       / 1
                  [   F      ]

      Output: ["A", "C", "D", "F", "E"]    distance is 6


Steps:

Create an adjacency list 

Initialize a new priority queue from the PriorityQueue class (pretend we have one). 
- Whenever we enqueue a node, the binary heap would sort for us, then bubble up and return the current value
- Just like BFS, we dequeue to check each node, as long as the queue still have nodes in it
        PriorityQueue = {
          values: [
            { val: 'A', priority: 0 },
            { val: 'B', priority: Infinity },
            { val: 'C', priority: Infinity },
            { val: 'D', priority: Infinity },
            { val: 'E', priority: Infinity },
            { val: 'F', priority: Infinity }
          ]
        }

Build up initial state for distances and paths objects
- initialize a distances {} to keep track of the distance from start node to each node.
        distances = {                     distances = {
          A: 0,                             A: 0,
          B: Infinity,                      B: 4,       // 0+4
          C: Infinity,                      C: 2,       // 0+2
          D: Infinity,       ------>        D: 4,       // 2+2
          E: Infinity,                      E: 7 -> 6   // 3+4 -> 1+5
          F: Infinity                       F: 6 -> 5   // 2+4 -> 1+4
        }
- initialize a paths {} to keep track of the path of each node from another node.
        paths = {                         paths = {
          A: null,                          A: null,
          B: null,                          B: A,
          C: null,          ------->        C: A,
          D: null,                          D: C,
          E: null,                          E: B -> F
          F: null                           F: C -> D
        }                                 }

Every time we look to visit a new node, we pick the node with the current known distance to visit first

Once we've moved to the node we're going to visit, we look at each of its neighbors

For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're 
checking from the starting node

If the new total distance to a node is less than the prev total, update the new shorter distance for that 
node      
*/

// temp naive priority queue for testing only, should use a binary heap priority queue instead
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  // will add new val in then sort all items in ascending order
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.values.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.values.shift();  // the current value
  }
}

const adjacencyList = { 
  A: [ 
    {node: "B", weight: 4}, 
    {node: "C", weight: 2},
  ], 
  B: [ 
    {node: "A", weight: 4}, 
    {node: "E", weight: 3},
  ], 
  C: [
    {node: "A", weight: 2}, 
    {node: "D", weight: 2},
    {node: "F", weight: 4}
  ],
  D: [
    {node: "C", weight: 2}, 
    {node: "E", weight: 3},
    {node: "F", weight: 1}
  ],
  E: [
    {node: "D", weight: 3}, 
    {node: "E", weight: 1},
    {node: "F", weight: 1}
  ],
  F: [
    {node: "C", weight: 4},
    {node: "D", weight: 1},
    {node: "E", weight: 1}
  ]
}

const dijkstra = (start, end) => {
  // hard code one for the interview so can visualize it
  const adjList = adjacencyList;

  // pretend we have one for JS just like Java & C++
  const pQueue = new PriorityQueue(); 

  const distances = {};
  const paths = {};
  let shortestPath = [];

  // build up initial state for `paths` and `distances`
  for (let vertex in adjList) {
    paths[vertex] = null;
    
    // under the hood, binary-heap priority queue will help us sort and bubble up the smallest item to top
    if (vertex === start) {
      distances[vertex] = 0;
      pQueue.enqueue(vertex, 0);
    } 
    else {
      distances[vertex] = Infinity;
      pQueue.enqueue(vertex, Infinity);
    }
  }

  // check each smallest item in priority queue
  while (pQueue.values.length) {
    current = pQueue.dequeue().val;   // A

    if (current === end) {
      // WE ARE DONE. Get all the previous stops on this path
      while (paths[current]) { 
        // console.log(current)   // E, F, D, C, 
        shortestPath.push(current);       // "E" -> ["E"] -> ["E", "F"] -> ["E", "F", "D" ...]
        current = paths[current];   // paths["E"] = "F" -> paths["F"] = "D"
      }
      break;  // break out of pqueue loop, no need to check anymore
    } 

    if (current || distances[current] !== Infinity) {     // distance["A"] === 0
      for (let neighbor of adjList[current]) {            // adjList["A"] === "B", "C"
        //calculate new distance to neighboring node
        let newDistance = distances[current] + neighbor.weight;     // 0+4=4, 0+2=2 ...
        let {node} = neighbor;
        
        /* compare new distance with node's existing distance
          if new distance is smaller, will be push to pQueue and 
          become one of the the next items to check
        */
        if (newDistance < distances[node]) {
          //updating new shortest distance to neighbor
          distances[node] = newDistance;
          //updating paths - How we got to neighbor
          paths[node] = current;
          //enqueue in priority queue with new priority
          pQueue.enqueue(node, newDistance);
        }
      }
    }
  }

  if (!shortestPath.length) return - 1;

  return shortestPath.concat(current).reverse();  // [ "E", "F", "D", "C", "A" ]  ->  [ 'A', 'C', 'D', 'F', 'E' ]
}

console.log(dijkstra("A", "E"));    // [ 'A', 'C', 'D', 'F', 'E' ]
console.log(dijkstra("A", "G"));    // [ ], pQueue will get emptied out 
console.log(dijkstra("A", "C"));    // ['A', 'C']








