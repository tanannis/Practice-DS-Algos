const { BinarySearchTree } = require("../Tree/BinarySearchTree");

/* DFS = Recursion:
            9
         4     20
       1  6  15  170

Pre-Order: Root -> Left -> Right
(root -> parent -> child)
    1. Create a Visited array for final result
    2. Add root's value to Visited
    3. Recursively check if current node has a left child
    4. Recursively check if current node has a right child
    5. If no more children, return the result
// res = [9,4,1,6,20,15,170]

In-Order: Left -> Root -> Right
(parent -> children)
    1. Create a Visited array for final result
    3. Recursively check if current node has a left child, add the left side to Visited first
    2. Then add root's value to Visited
    4. Recursively check if current node has a right child and add to Visited
    5. If no more children, return the result
// res = [1,4,6,9,15,20,170]

Post-Order: Left -> Right -> Root 
(children -> parent -> root)
    1. Create a Visited array for final result
    2. Recursively check if current node has a left child and add to Visited
    3. Recursively check if current node has a right child and add to Visisted
    4. Lastly, add root's value to Visited
    5. If no more children, return the result
// res = [1,6,4,15,170,20,9]
*/

// Copy the tree by extending it. This new tree should have all the same methods from the original. Add new methods to new tree.
class BST extends BinarySearchTree {
    // Pre-Order
    buildArrayByDFSPreOrder() {
      function traverse(node, visited = []) {
        // Root
        visited.push(node.value)
        // Left
        if (node.left) traverse(node.left, visited)
        // Right
        if (node.right) traverse(node.right, visited)
        return visited;
      }
      return traverse(this.root);
    }

    // In-Order
    buildArrayByDFSInOrder() {
      function traverse(node, visited = []) {
        // Left  
        if (node.left) traverse(node.left, visited)
        // Root
        visited.push(node.value)
        // Right
        if (node.right) traverse(node.right, visited)
        return visited;
      }
      return traverse(this.root);
    }

    // Post-Order
    buildArrayByDFSPostOrder() {
      function traverse(node, visited = []) {
        // Left
        if (node.left) traverse(node.left, visited)
        // Right
        if (node.right) traverse(node.right, visited)
        // Root
        visited.push(node.value)
        return visited;
      }
      return traverse(this.root);
    }
}

// Now build a tree and call its DFS method
function buildBST(nums) {
    const tree = new BST();
    for (const num of nums) {
        tree.insert(num)
    }
    // return tree.buildArrayByDFSPreOrder(); 
    // return tree.buildArrayByDFSInOrder(); 
    return tree.buildArrayByDFSPostOrder(); 
}

const nums = [9,4,6,20,170,15,1]; 
const res = buildBST(nums);
console.log("Visited =", res);