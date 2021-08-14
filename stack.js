// ------------------------------
// Implementation of Stack  - LIFO
// ------------------------------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.stack = null;
  }
  pop() {
    if (this.stack === null) return console.log("Stack is empty");
    const value = this.stack.value;
    this.stack = this.stack.next;
    return value;
  }
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.stack;
    this.stack = newNode;
    return this;
  }
  peek() {
    return this.stack.value;
  }
}
