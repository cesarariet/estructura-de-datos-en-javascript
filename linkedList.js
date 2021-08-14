// ----------------------------------------------------------------
// IMPLEMENTACION DE SiglyLinkedList
// ----------------------------------------------------------------
class SinglyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = new SinglyNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  prepend(value) {
    const node = new SinglyNode(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
  append(value) {
    const node = new SinglyNode(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  lookup(depth) {
    if (depth >= this.length) {
      return undefined;
    }

    let node = this.head;
    for (let i = 1; i <= depth; i++) {
      node = node.next;
    }
    return node;
  }
  insert(value, depth) {
    if (depth > this.length)
      return console.log(
        "Incompatible depth: " + depth + "with the list length: " + this.length
      );
    if (depth === 0) return this.prepend(value);
    if (depth === this.length) return this.append(value);
    const node = new SinglyNode(value);
    node.next = this.lookup(depth);
    this.lookup(depth - 1).next = node;
    this.length++;
    return this;
  }
  delete(depth) {
    if (depth >= this.length || this.length === 1)
      return console.log("Imposible delete the node at depth " + depth);

    if (depth === this.length - 1) {
      this.tail = this.lookup(depth - 1);
      this.tail.next = null;
    } else if (depth === 0) {
      this.head = this.lookup(1);
    } else {
      this.lookup(depth - 1).next = this.lookup(depth + 1);
    }
    this.length--;
    return this;
  }
}

// ----------------------------------------------------------------
// IMPLEMENTACION DE DoublyLinkedList
// ----------------------------------------------------------------

class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = new DoubleNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  prepend(value) {
    const node = new DoubleNode(value);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
  append(value) {
    const node = new DoubleNode(value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
    return this;
  }
  lookup(depth) {
    if (depth >= this.length) return console.log("ERROR: depth exceeded");
    // Use the short way to find the node
    let node;
    if (depth <= this.length / 2) {
      node = this.head;
      for (let i = 0; i < depth; i++) {
        node = node.next;
      }
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > depth; i--) {
        node = node.prev;
      }
    }
    return node;
  }
  insert(value, depth) {
    const node = new DoubleNode(value);
    if (depth === 0) return this.prepend(value);
    if (depth === this.length) return this.append(value);
    const prevNode = this.lookup(depth - 1);
    const nextNode = this.lookup(depth);
    prevNode.next = node;
    node.prev = prevNode;
    nextNode.prev = node;
    node.next = nextNode;
    this.length++;
    return this;
  }
  delete(depth) {
    if (depth >= this.length) return console.log("ERROR: depth exceeded");
    if (depth === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (depth === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      const nextNode = this.lookup(depth + 1);
      const prevNode = this.lookup(depth - 1);
      nextNode.prev = prevNode;
      prevNode.next = nextNode;
    }
    this.length--;
    return this;
  }
}
