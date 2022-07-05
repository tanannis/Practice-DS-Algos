/* Build a basic Weighted graph with Adjacency List. The finished graph will be in Adjacency List format (hash table):

        "BKLYN"
   2 /     |      \ 3
    /      | 4     \
"SI"       |      "QUEENS"
     \     |      /
    5 \    |     / 3
         "NYC"


WeightedGraph.adjacencyList = 
 { 
    BKLYN: [ 
      {node: 'QUEENS', weight: 3}, 
      {node: 'NYC', weight: 4},
      {node: 'SI', weight: 2}
    ], 
    QUEENS: [ 
      {node: 'BKLYN', weight: 3},
      {node: 'NYC', weight: 3}, 
    ], 
    NYC: [ 
      {node: 'BKLYN', weight: 4},
      {node: 'QUEENS', weight: 3},
      {node: 'SI', weight:5}
    ],
    SI: [ 
      {node: 'BKLYN', weight: 2},
      {node: 'NYC', weight: 5}
    ] 
  }
*/

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex = (vertex) => {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge = (v1, v2, weight) => {
    // check if these 2 vertices already exist, if not add them to the graph
    this.adjacencyList[v1].push({node: v2, weight});
    this.adjacencyList[v2].push({node: v1, weight});
  }

  // ...
}

const graph = new WeightedGraph();

graph.addVertex("BKLYN");
graph.addVertex("QUEENS");
graph.addVertex("NYC");
graph.addVertex("SI");
graph.addEdge("BKLYN", "QUEENS", 3);
graph.addEdge("NYC", "BKLYN", 4);
graph.addEdge("QUEENS", "NYC", 3);
graph.addEdge("BKLYN", "SI", 2);
graph.addEdge("NYC", "SI", 5);

console.log(graph.adjacencyList);