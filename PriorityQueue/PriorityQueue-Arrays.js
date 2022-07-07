/* Binary Heap Priority Queue:
  - Min Binary Heap: the smaller the value, the higher priority
  - good to use for Dikstra Algorithm 
  - time = O(log n) for insertion and deletion

  Tree representation:

                            ["pay bill", 1]
                  ["walk dog", 2]        ["go out", 3]


  this.values = [
    ['gunshot wound', 1],
    ['broken arm', 2 ],
    ['high fever', 4 ],
    ['common cold', 5],
    ['glass in food', 3]
  ]
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
    const ele = this.values[0];   // ['glass in food', 3]

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


let ER = new MinHeapPriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in food", 3);
console.log(ER.values);

console.log(ER.dequeue());  // [ 'gunshot wound', 1 ]
console.log(ER.dequeue());  // [ 'broken arm', 2 ]
console.log(ER.dequeue());  // [ 'glass in food', 3 ]


