/* Binary Heap 
- is very similar to a binary search tree, but with some different rules
- always fill up the left side first then right side, before going down a level, and will always be full on both sides (but BST can be very bias to one side)
- insertion time is O(log n)
- removal time is O(log n)
- search is O(n), BH is not really made for seaching


Min Binary Heap:
- parent nodes are always Smaller than child nodes
- but no guarantees between sibling nodes
              12
          18      27  
        39  33   41


How to find children of a parent node?
    Left child = 2n + 1;
    Right child = 2n + 2;


How to find parent of a child node?
    parent = Math.floor((n-1) / 2);


Constructing a Max Binary Heap class
- We use an array and its indices to model the structure and positions of a MBH.

  Insert / Enqueue
   - push input val to the end of array
   - bubble up val to its correct spot
    Bubble Up
      - keep finding parent and swapping positions
      - find parent & compare 
      - if larger than parent, swap position with parent

  Extract / Dequeue max val
  - extract / remove the root
  - replace with the most recently added
  - adjust positions (sink down)
  - return the extracted item
    Sink Down
    - find children if inbound
    - check which child is larger (left or right?)
    - swap position with the larger child
    - replace current index to larger child's index
    - reapeat above until if no more children OR it's smaller than children

*/


class MaxBinaryHeap {
  constructor () {
    this.values = [ 41, 39, 33, 18, 27, 12 ];
  }

  insert (val) {
    this.values.push(val);    // [27, 18]
    this.bubbleUp(val);
  }

  bubbleUp (val) {
    let n = this.values.indexOf(val);

    while (n !== 0) {
      // find parent
      let parentIdx = Math.floor((n - 1)/ 2);
      let parent = this.values[parentIdx];

      if (val <= parent) break; 

      // swap;
      this.values[parentIdx] = val;
      this.values[n] = parent;

      n = parentIdx;
    }
  }

  extractMax () {
    let newest = this.values.pop();
    if (!this.values.length) return newest;

    let max = this.values[0];
    this.values[0] = newest;

    // adjust positions
    this.sinkDown();
    return max;
  }

  sinkDown () {
    let n = 0;
    const ele = this.values[0];
    const valsLength = this.values.length;
   
    while (true) {
      let leftIdx = 2 * n + 1;
      let rightIdx = 2 * n + 2;
      let leftChild;
      let rightChild;
      let swapIdx = null;

      // make sure left child is inbound
      if (leftIdx < valsLength) {
        leftChild = this.values[leftIdx];
        if (leftChild > ele) {
          swapIdx = leftIdx;
        }
      }

      // make sure right child is inbound
      if (rightIdx < valsLength) {
        rightChild = this.values[rightIdx];

        /* swapIdx will remain null if left child was smaller than ele.
           then we only need to compare rightChild with ele.
           OR
           swapIdx exist if left child was larger than ele
           then we need to compare rightChild with leftChild
        */
        if ((!swapIdx && rightChild > ele) || (swapIdx && rightChild > leftChild))  {
          swapIdx = rightIdx;
        }
      }

      // this happens if ele is in the correct position (larger than both left and right children)
      if (!swapIdx) break;

      // swap with the larger child
      this.values[n] = this.values[swapIdx];
      this.values[swapIdx] = ele;
      n = swapIdx;
    }
  }

}

let maxHeap = new MaxBinaryHeap();

maxHeap.insert(55); // [ 55, 39, 41, 18, 27, 12, 33 ]
maxHeap.insert(1);  // [ 55, 39, 41, 18, 27, 12, 33, 1 ]
maxHeap.insert(45); // [ 55, 45, 41, 39, 27, 12, 33, 1, 18 ]
maxHeap.insert(199); // [ 199, 55, 41, 39, 45, 12, 33, 1, 18, 27 ]
console.log(maxHeap.values);

console.log(maxHeap.extractMax());  // 199
console.log(maxHeap.extractMax());  // 55
console.log(maxHeap.extractMax());  // 45
console.log(maxHeap.extractMax());  // 41
console.log(maxHeap.extractMax());  // 39
console.log(maxHeap.extractMax());  // 33
console.log(maxHeap.extractMax());  // 27
console.log(maxHeap.extractMax());  // 18
console.log(maxHeap.extractMax());  // 12
console.log(maxHeap.extractMax());  // 1
console.log(maxHeap.values)  // []


