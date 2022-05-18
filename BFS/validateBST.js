/* Given the root of a binary tree, determine if it is a valid binary search tree (BST). 
*/

// BFS
// Use a queue to keep track of the current node
// Compare current node with the pre min val and prev max val
// Re-assign the min and max everytime after we checked a node 
// Must reassign min and max in an object with the current node for each side, otherwise the min / max vals won't line up correctly
const isValidBST = function(root) {
    // a null root is still a BST
    if (root === null) return true;  
    
    // min has to be -Infinity in case root's val is negative num 
    const queue = [{node: root, min: -Infinity, max: Infinity}];

    while (queue.length) {
        const {node, min, max} = queue.shift();
        
        // check current node if it's within the requirement
        if (node.val <= min || node.val >= max) return false;
        
        if (node.left !== null){
            // re-assign max to current node's val because we don't want left child to be bigger than parent
            // min no change
            queue.push({node: node.left, min, max: node.val});
        }
        if (node.right !== null){
             // re-assign min to current node's val because we don't want right child to be smaller than parent
             // max no change
            queue.push({node: node.right, min: node.val, max});
        }     
    }
    return true;
};


// ---------------------------------------------------------------------
// DFS - recursion
// Similar to the iterative version, we re-assign min and max everything after we checked a node
// But here our min and max can start with null
const isValidBST2 = function (root) {
    return dfs(root, null, null);
}

const dfs = function (node, min, max) {
    if (node === null) return true;
    if (min !== null && node.val <= min) return false;
    if (max !== null && node.val >= max) return false;
    // check if both sides are true
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
}


// ---------------------------------------------------------------------
//DFS- In Order traversal
// Convert tree into an array using In-Order traversal
// If it's a valid BST, the array should be sorted in ascending order. 
const isValidBST3 = function(root) {
    const array = traverseInOrder(root, [])
    // check if it's a sorted array
    for(let i = 0; i < array.length; i++){
        if(array[i] >= array[i+1]) return false
    }
    return true
};

// Make an in-order array
function traverseInOrder(currentNode, list){
    if (currentNode.left) traverseInOrder(currentNode.left, list)
    list.push(currentNode.val)
    if (currentNode.right) traverseInOrder(currentNode.right, list)
    return list
}


// Test here https://leetcode.com/problems/validate-binary-search-tree/