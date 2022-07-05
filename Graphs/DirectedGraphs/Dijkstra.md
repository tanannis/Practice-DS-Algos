# Dijkstra's Algorithm

When to use?
- When a graph is directed and has weights on edges
- Find the shortest path
- Weights have to positive values
- Apply with Greedy method

### Algorithm Steps:
1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
2. Once we've moved to the node we're going to visit, we look at each of its neighbors
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
4. If the new total distance to a node is less than the prev total, update the new shorter distance for that node


Use a Binary Heap Priority Queue
- Will give us the next node the visit