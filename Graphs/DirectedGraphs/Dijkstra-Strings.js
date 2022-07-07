/* Dijkstra basic: Find the shortest path from A to E. Time = O(E log V)
   - E == num of Edges
   - V == num of Vertices
   - log V == time complexity of min heap o(log n)

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
- Whenever we enqueue a ele, the binary heap would sort for us, then bubble up and return the current value
- Just like BFS, we dequeue to check each ele, as long as the queue still have eles in it
        PriorityQueue = {
          values: [
            [ 'A', 0 ],
            [ 'B', Infinity ],
            [ 'C', Infinity ],
            [ 'D', Infinity ],
            [ 'E', Infinity ],
            [ 'F', Infinity ]
          ]
        }

Build up initial state for distances and paths objects
- initialize a distances {} to keep track of the distance from start ele to each ele.
        distances = {                     distances = {
          A: 0,                             A: 0,
          B: Infinity,                      B: 4,       // 0+4
          C: Infinity,                      C: 2,       // 0+2
          D: Infinity,       ------>        D: 4,       // 2+2
          E: Infinity,                      E: 7 -> 6   // 3+4 -> 1+5
          F: Infinity                       F: 6 -> 5   // 2+4 -> 1+4
        }
- initialize a paths {} to keep track of the path of each ele from another ele.
        paths = {                         paths = {
          A: null,                          A: null,
          B: null,                          B: A,
          C: null,          ------->        C: A,
          D: null,                          D: C,
          E: null,                          E: B -> F
          F: null                           F: C -> D
        }                                 }

Every time we look to visit a new ele, we pick the ele with the current known distance to visit first

Once we've moved to the ele we're going to visit, we look at each of its neighbors

For each neighboring ele, we calculate the distance by summing the total edges that lead to the ele we're 
checking from the starting ele

If the new total distance to a ele is less than the prev total, update the new shorter distance for that 
ele      
*/

class PriorityQueue {
  constructor(){
    this.values = [];
  }

  size () {
    return this.values.length;
  }

  peek () {
    return this.values[0];
  }

  isEmpty () {
    return this.values.length === 0;
  }

  enqueue(val, priority){
    this.values.push([val, priority]);
    this.bubbleUp();
  }

  bubbleUp(){
    let idx = this.values.length - 1;
    const ele = this.values[idx];   

    while(idx > 0){
        let parentIdx = Math.floor((idx - 1)/2);
        let parent = this.values[parentIdx];   

        if (ele[1] >= parent[1]) break;
        this.values[parentIdx] = ele;
        this.values[idx] = parent;
        idx = parentIdx;
    }
  }

  // extra the smallest ele (highest priority)
  dequeue(){
    const end = this.values.pop();
    if (!this.values.length) return end;

    const min = this.values[0];
    this.values[0] = end;

    // adjust positions
    this.sinkDown();
    return min;
  }

  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const ele = this.values[0];   // ['glass in food'

    while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild,rightChild;
      let swapIdx = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild[1] < ele[1]) {
          swapIdx = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if ((!swapIdx && rightChild[1] < ele[1]) || (swapIdx && rightChild[1] < leftChild[1])) {
          swapIdx = rightChildIdx;
        }
      }

      if(!swapIdx) break;

      // swap
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = ele;
      idx = swapIdx;
    }
  }
}

const adjacencyList = { 
  A: [ ["B", 4], ["C", 2] ], 
  B: [ ["A", 4], ["E", 3] ], 
  C: [ ["A", 2], ["D", 2], ["F", 4] ],
  D: [ ["C", 2], ["E", 3], ["F", 1] ], 
  E: [ ["D", 3], ["E", 1], ["F", 1] ],
  F: [ ["C", 4], ["D", 1], ["E", 1] ]
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

  let current;
  // check each smallest item in priority queue
  while (!pQueue.isEmpty()) {
    current = pQueue.dequeue()[0];   // "A"

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
      for (let neighbor of adjList[current]) {            // adjList["A"] -> ["B", 4], ["C", 2] ...
        //calculate new distance to neighboring ele
        let newDistance = distances[current] + neighbor[1];     // 0+4=4, 0+2=2 ...
        let ele = neighbor[0];
        
        /* compare new distance with ele's existing distance
          if new distance is smaller, will be push to pQueue and 
          become one of the the next items to check
        */
        if (newDistance < distances[ele]) {
          //updating new shortest distance to neighbor
          distances[ele] = newDistance;
          //updating paths - How we got to neighbor
          paths[ele] = current;
          //enqueue in priority queue with new priority
          pQueue.enqueue(ele, newDistance);
        }
      }
    }
  }

  if (!shortestPath.length) return - 1;

  return shortestPath.concat(current).reverse();  // [ "E", "F", "D", "C", "A" ]  ->  [ 'A', 'C', 'D', 'F', 'E' ]
}

console.log(dijkstra("A", "E"));    // [ 'A', 'C', 'D', 'F', 'E' ]
console.log(dijkstra("A", "G"));    // -1, pQueue will get emptied out and no path exits because no "G"
console.log(dijkstra("A", "C"));    // ['A', 'C']








