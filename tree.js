// ------------------------------
// Binary Tree implementation
// ------------------------------

class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BinaryNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let node = this.root;
    while (node !== null) {
      if (node.value >= value) {
        if (node.left === null) {
          node.left = newNode;
          return this;
        } else {
          node = node.left;
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
          return this;
        } else {
          node = node.right;
        }
      }
    }
  }

  search(value) {
    value = parseInt(value);
    let currentNode = this.root;
    if (currentNode === null) return console.log("The tree is empty.");
    while (currentNode !== null && currentNode.value !== value) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }
}
