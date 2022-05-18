/* Given a binary tree, determine if it is height-balanced. For this problem, a height-balanced binary tree is defined as: a binary tree in which the left and right subtrees of every node differ in height by no more than 1. 

https://leetcode.com/problems/balanced-binary-tree/
*/

// DFS bottom up approach
// Recursively get the max height of each subtree for left and right
// Then Recursively check if tree is balanced
const isBalanced = function(root) {
    if (!root) return true;
    
    // check the difference btw left and right
    const left = getHeight(root.left);
    const right = getHeight(root.right);
    if (Math.abs(left - right) > 1) return false;
    
    return isBalanced(root.left) && isBalanced(root.right);
};

const getHeight = function (node, height = 0) {
    if (!node) return height;
    // get the max height of subtree
    return Math.max(getHeight(node.left, height + 1), getHeight(node.right, height + 1));
}