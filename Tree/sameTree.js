
/* Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

https://leetcode.com/problems/same-tree/
*/

// DFS approach, cleaner and easier to read, but run time is little slower than BFS below for some reason. Time = O(N), space = O(N) 
const isSameTreeDFS = function (p, q) {
    if (!p && !q) return true;
    if (!p && q || p && !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// BFS brute force approach. Runtime: 59 ms, faster than 91.50% of JavaScript online submissions. But too repetive. TODO: improve to make cleaner. Time = O(N), space = O(N)
const isSameTreeBFS = function(p, q) {
    if (!p && q || p && !q) return false;
    if (!p && !q) return true;
    
    const queueForP = [p];
    const queueForQ = [q];
    
    while (queueForP.length || queueForQ.length) {
        const pNode = queueForP.shift();
        const qNode = queueForQ.shift();
        
        if (pNode && !qNode || !pNode && qNode) return false;
        if (pNode.val !== qNode.val) return false;
        
        if (pNode.left && !qNode.left) return false;
        if (pNode.right && !qNode.right) return false;
        if (!pNode.left && qNode.left) return false;
        if (!pNode.right && qNode.right) return false;
        
        if (pNode.left !== null) queueForP.push(pNode.left);
        if (qNode.left !== null) queueForQ.push(qNode.left);
        if (pNode.right !== null) queueForP.push(pNode.right);
        if (qNode.right !== null) queueForQ.push(qNode.right);
    }
    return true;
};

