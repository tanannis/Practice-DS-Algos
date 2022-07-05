/* 
Build a basic undirected graph with Adjacency List. An undirected graph has edges that can both ways / no one day direction

A graph needs
- Vertices (the node / key)
- Edges (the connection / path btw two nodes) 

The finished graph will be in Adjacency List format (hash table):
  UndirectedGraph.adjacencyList = 
  { 
    BKLYN: [ 'QUEENS', 'NYC', 'SI' ], 
    QUEENS: [ 'BKLYN', 'NYC' ], 
    NYC: [ 'BKLYN', 'QUEENS', 'SI' ],
    SI: [ 'BKLYN', 'NYC' ] 
  }

     "BKLYN"
     /  |   \
  "SI"  |   "QUEENS"
     \  |   /
       "NYC"

*/

class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex = (vertex) => {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge = (v1, v2) => {
    // check if these 2 vertices already exist, if not add them to the graph
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);

    // connect v1 and v2 by adding to each other's arrays
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge = (v1, v2) => {
    // reassign v1 array by removing v2 
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
   
    // reassign v2 array by removing v1
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex = (vertex) => {
    // loop vertex's connections array to see which connection it has
    // remove vertex from each of its connections
    for (const key of this.adjacencyList[vertex]) {
      this.removeEdge(key, vertex);
    }
    delete this.adjacencyList[vertex];
  }

}

const graph = new UndirectedGraph();

graph.addVertex("BKLYN");
graph.addVertex("QUEENS");
graph.addVertex("NYC");
graph.addVertex("SI");
graph.addEdge("BKLYN", "QUEENS");
graph.addEdge("NYC", "BKLYN");
graph.addEdge("QUEENS", "NYC");
graph.addEdge("BKLYN", "SI");
graph.addEdge("NYC", "SI");
// graph.removeEdge("QUEENS", "NYC");
// graph.removeVertex("BKLYN");

console.log(graph.adjacencyList);