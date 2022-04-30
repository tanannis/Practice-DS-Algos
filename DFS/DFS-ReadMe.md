https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr

# Depth First Search

Is a tree and graph traversal algorithm.

It goes from Root -> Left all the way down to bottom -> Right all the way down, traverse vertically path by path go deep (finishing checking all children on the left side first, then go back up and check the right side.)

Easier using recursion. Uses less memory but can get slow if tree is very very deep.

Time: O(n), need to visit all nodes
Space: 
- Recursion = O(h) where h is the maximal height (or depth) of tree
- Iteration with a stack = O(n) 

Use Case:
- Check if the path exist between two nodes
- If solutions are frequent but located deep in the tree
- If the tree is very wide (It's quicker to finish checking the depth of each side first than finish checking the width first, also can save memory)

