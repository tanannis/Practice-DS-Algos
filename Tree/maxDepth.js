
/* Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

https://leetcode.com/problems/maximum-depth-of-binary-tree/
*/


// DFS recursion
// Recursively getting the height for each side
// Use Math.max() to compare which side is longer
const maxDepth = function(root, depth = 0) {
    let node = root;
    
    //base case
    if(node === null) return depth;
    
    //compare if the left OR right side is deeper?
    return Math.max(maxDepth(node.left, depth + 1), maxDepth(node.right, depth + 1))
};