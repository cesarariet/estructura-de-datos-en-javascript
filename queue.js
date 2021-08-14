// ------------------------------
// Implementation of Queue FIFO
// ------------------------------

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = this.first;
  }
  enqueue(value) {
    if (this.first === null) {
      this.first = new QueueNode(value);
      this.last = this.first;
      return this;
    }
    const newQueueNode = new QueueNode(value);
    this.last.next = newQueueNode;
    this.last = newQueueNode;
    return this;
  }
  dequeue() {
    if (this.first === null) return console.log("Queue is empty");
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
      return this;
    } else {
      this.first = this.first.next;
      return this;
    }
  }
  peek() {
    return this.first.value;
  }
}
