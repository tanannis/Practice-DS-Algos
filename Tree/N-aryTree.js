/* Given the root of an n-ary tree, return the preorder traversal of its nodes' values. Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]
              1
       3      2      4
     5   6

*/


/* Simply DFS tree, and push root, then most left child, then most right child
  We can perform DFS both recursivly and iteratively
*/

// Recursive
const preorder = (root) => {
  return preOrderDFS(root, []);
}

const preOrderDFS = (node, arr) => {
  if (!node) return arr;

  arr.push(node.val);

  for (const child of node.children) {
      preOrderDFS(child, arr)
  }
  return arr
}


// Iterative:  
// loop backward to push right side child in first, so we will pop and check the left side child first to keep pre-order
const preorder2 = (root) => {
  if (!root) return [];
  
  let arr = [];
  let stack = [root]; 
      
  while (stack.length) {      
      const node = stack.pop();       
      arr.push(node.val)   

      if (node.children) {
          for (let i = node.children.length - 1; i >= 0; i--) {
              stack.push(node.children[i])
          }
      }
  }
  return arr
}
