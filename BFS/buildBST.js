const { BinarySearchTree } = require("../Tree/buildBST");

/* BFS = Iteration with a Queue:
    1. Create a Visited array for final result
    2. Create a queue to keep track of which node to check next
    3. Add Root to queue to indicated this is the 1st node to check.
    4. While the queue is not empty
    5. Dequeue (shift) node from queue -> this is current node to check
    6. Push current node's value to Visited 
    7. If this current node has left child? Push it to queue to check later
    8. If this current node has right child? Push it to queue to check later
    (If the tree has many many children, simply check each child e.g. child1, child2, child3...)
    9. When the loop is done, return Visited answers
            9
         4     20
       1  6  15  170

     res = [9,4,20,1,6,15,170]
*/

// Now build a tree and call its BFS method
function buildBST(nums) {
    const tree = new BinarySearchTree();
    for (const num of nums) {
        tree.insert(num)
    }
    return tree;
}

const nums = [1,4,100,5]; 
const res = buildBST(nums);
console.log("Tree", res);