## Storing Graphs

### Adjacency Matrix
- A square matrix (chart / table) used to represent a finite graph. The elements of the matrix indicate whether pairs of vertices (nodes) are adjacent or not in the graph (if they are connected or not).
- Using 0 and 1 as indication: 0 = false, 1 = true
- Good to use if your data has a lot of connections / each data is connected

Pros: 
- Much faster to lookup a specific edge = O(1)

Cons:
- Takes up a lot of space (in sparse graphs)
- Slower to iterate over all edges

Run Time:
- Add Vertex = O(V^2)
- Add Edge = O(1)
- Remove Vertex = O(V^2)
- Remove Edge = O(1)
- Query = O(1)
- Storage = O(V^2)


### Adjacency List / Hash Table
- Good to use if your data is not connected / not a lot of connections
- Nested Arrays: using indexes to show connection, but only works if values of nodes are numeric.
  [
0: [1,2],
1: [4,5],
2: [0,3],
3: [2]
  ]
- Hash Table: Works if values of nodes are numbers, strings, etc
{
    A: ["B", "D"],
    B: ["A", "C"],
    C: ["B", "D"],
    D: ["A", "C"]
}

Pros: 
- Take up much less space(in sparse graphs)
- Faster to iterate over all edges

Cons:
- Slower to lookup a specific edge

Run Time:
- Add Vertex = O(1)
- Add Edge = O(1)
- Remove Vertex = O(V + E)
- Remove Edge = O(E)
- Query = O(V + E)
- Storage = O(V + E)
