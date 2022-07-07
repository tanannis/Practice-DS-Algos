/* Binary Heap Priority Queue:
  - Min Binary Heap: the smaller the value, the higher priority
  - good to use for Dikstra Algorithm 
  - time = O(log n) for insertion and deletion

  Tree representation:

                            {val:"pay bill", priority:1}
        {val:"walk dog", priority:2}             {val:"go out", priority:3}


  Array representation:      
    [
      Node { val: 'gunshot wound', priority: 1 },
      Node { val: 'broken arm', priority: 2 },
      Node { val: 'high fever', priority: 4 },
      Node { val: 'common cold', priority: 5 },
      Node { val: 'glass in food', priority: 3 }
    ]
*/

class Node {
  constructor(val, priority){
      this.val = val;
      this.priority = priority;
  }
}

class BinaryHeapPriorityQueue {
  constructor(){
    this.values = [];
  }

  enqueue(val, priority){
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp(){
    let idx = this.values.length - 1;
    const ele = this.values[idx];
    while(idx > 0){
        let parentIdx = Math.floor((idx - 1)/2);
        let parent = this.values[parentIdx];
        if(ele.priority >= parent.priority) break;
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
    const ele = this.values[0];

    while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild,rightChild;
      let swapIdx = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild.priority < ele.priority) {
          swapIdx = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if ((!swapIdx && rightChild.priority < ele.priority) || (swapIdx && rightChild.priority < leftChild.priority)) {
          swapIdx = rightChildIdx;
        }
      }

      if(!swapIdx) break;

      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = ele;
      idx = swapIdx;
    }
  }
}


let ER = new BinaryHeapPriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in food", 3);
// console.log(ER.values);

console.log(ER.dequeue());  // { val: 'gunshot wound', priority: 1 }
console.log(ER.dequeue());  // { val: 'broken arm', priority: 2}
console.log(ER.dequeue());  // { val: 'glass in food', priority: 3 }





/* Temporary & Slow version, not the correct one but only use for the general idea */
/*
class NaivePriorityQueue {
  constructor(){
    this.values = [];
  }
  // will add new val in then sort all items in ascending order
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };

  dequeue() {
    return this.values.shift();  // the smallest value
  };

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}
*/


