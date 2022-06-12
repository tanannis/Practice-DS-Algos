# Graphs Traversal
Graphs are notes with connections between them.


### Terminology
Vertex - a node
Edge - connection between nodes


### Use cases:
- Friends connections
- Music recommendations
- Maps
- Networks
- Modeling relationships
...


### Types of Graphs:
1. Tree

2. Directed Graph
- A graph with arrow edges pointing to one direction / only goes one way
- For example, if you follow a celeberty on Instagram but the celeberty doesn't follw you back, you can see his/her content, but s/he can't see yours.

3. Undirected Graph
- A graph with edges that don't have directions
- For example, if both persons follow each other, both can see each other's contents

4. Weighted Graph
- A graph in which each edge is given a numerical value
- For example, maps have distance on each route

5. Unweighted Graph
- A graph in which each edge has no numerical value

6. Cyclic Graph
- A graph that has a cycle that can cause infinite loop with don't keep track of the visited nodes
 
7. Acyclic Graph
- A graph that only goes one way and can't go back


### Traversal
1. BFS

2. DFS

3. Dijkstra
- A very effecient algorithm to find the shortest path
Pros: Very fast and effecient
Cons: Complicated and can't handle negative vertices

4. Bellman-Ford
- An algorithm to find the shortest path
Pros: Can handle negative vertices
Cons: Slow and complicated


