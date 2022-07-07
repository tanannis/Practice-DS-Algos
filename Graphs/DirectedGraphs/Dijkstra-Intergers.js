/* You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, v
the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.
We will send a signal from a given node k. 

Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for a receive the signal, return -1.
** NOT returning a path!!! ***
*/

/* Dijkstra's Algorithm + MinHeap Priority Queue BFS
curr       target
vertex     vertex      edge
[2,         3,          1]

Input = [[2,1,1],[2,3,1],[3,4,1]], target = 4, start = 2

Build distances array to keep track of distances
    0           1        2         3             0   1   2   3
[ Infinity, Infinity, Infinity, Infinity ] ->  [ 1,  0,  1,  2 ]


Build adjacency list like this
  0   1   2   3          
[ [], [], [], [] ] 
                 ->  [ 
                        0 [], 
                        1 [ [0,1], [2,1] ], 
                        2 [ [3,1] ], 
                        3 [] 
                      ]

Similar to BFS, but this time we utilize a Min-Heap / Priority Queue, so every dequeue node has the smallest value (shortest distance)
As long as min heap is not empty
    pop out the smallest ele
    check its neighbors
    for each of the neighbor (let say point C)
        get a new distance by adding the current distance (let say from A to B is 2), 
          and sum up with distance to C (let say from B to C is 3), 2 + 3 = 5
        if new distance is Smaller than what's already in C (from a prev path), then we update C with the new distance
        and we put this neighbor and the new distance to Min Heap, this way will help for the next round

In the end, the distance array should be all filled up. We can get the sum from it under distance[target] directly.
If the sum in target is Infinity, that means no other nodes have reached here before, means it's not possible to reach all nodes, therefore retu
Else just return the sum
*/

class MinHeapPriorityQueue {
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
    const ele = this.values[0];   // ['glass in food

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

const networkDelayTime = function(times, n, start) {
  // using array for distances and adjList will only work when eles are integers
  const distances = new Array(n).fill(Infinity);      // [ Infinity, Infinity, Infinity, Infinity ]
  const adjList = distances.map(() => []);        //  [ [], [], [], [] ]
  
  // because array's index starts at 0, so if start is 4, it's at index 3 instead
  distances[start - 1] = 0;
  
  // build adjacency list
  for (let time of times) {
      const source = time[0];
      const target = time[1];
      const weight = time[2];
      // again, because array's index starts at 0, so all indices need to go back 1 index
      adjList[source - 1].push([target - 1, weight]);
  }

  const heap = new MinHeapPriorityQueue();
  heap.enqueue(start-1, 0);
  
  // same as BFS, keep checking as long as queue isn't empty
  while(!heap.isEmpty()) {
      // get the smallest ele from heap
      const currentVal = heap.dequeue()[0];  
      // get smallest ele's neighbors
      const neighbors = adjList[currentVal];
      
      // meat!!! update distances from start to each neighbor under different paths
      for (let neighbor of neighbors) {
          const neighborVal = neighbor[0];
          const weight = neighbor[1];
          const newDistance = distances[currentVal] + weight;
          
          // check if new distance is shorter than previous distance
          if (newDistance < distances[neighborVal]) {
              distances[neighborVal] = newDistance;
              heap.enqueue(neighborVal, newDistance);
          }
      } 
  }
  
  // console.log(distances) // [ 1,  0,  1,  2 ]
  /* After the distances are all fill out, simply look at the Sum of the target index */
  const result = Math.max(...distances);
  
  // If one of the node is unreachable, its distance will remain Infinity, therefore return -1
  return result === Infinity ? - 1: result;
};

const t = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6],[3, 2, 3], [5, 3, 7], [3, 1, 5]];
console.log(networkDelayTime(t, 5, 1))  // 14

console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2)) // 2
console.log(networkDelayTime([[1,2,1]], 2, 1)) // 1
console.log(networkDelayTime([[1,2,1]], 2, 2)) // -1
console.log(networkDelayTime([[1,2,1],[2,1,3]], 2, 2)) // 3
