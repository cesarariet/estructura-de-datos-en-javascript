class GraphsAdjecentList {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
    return this;
  }
  addEdge(nodeStart, nodeEnd) {
    this.adjacentList[nodeStart].includes(nodeEnd)
      ? console.log("The edge already exists")
      : this.adjacentList[node].push(adjacent);
    return this;
  }
}
