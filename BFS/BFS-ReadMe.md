https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr

# Breadth First Search

Is a tree and graph traversal algorithm.

It goes from Root -> Left -> Right -> Left -> Right ..., traverse horizontally level by level from top to bottom

It needs extra memory to keep track of the parent nodes that we still have to check (vertices in a queue)

Easier using iteration than recursion

Time: O(n), need to visit all nodes
Space: 
- Iteration = O(n) worst case if need to store all vertices in the queue

## Use Cases: 
- Find the shortest path
- Find the closer nodes
- If you know the solution isn't far from the root of the tree
- If the tree is very deep and solutions are rare (Using DFS will take too long. It's quicker to finish checking the width first before checking the depth of each side)

