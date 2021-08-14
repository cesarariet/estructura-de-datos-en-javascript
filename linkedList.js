class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SiglyLinkedList {
  constructor(value) {
    this.head = new Node(value, null);
    this.tail = this.head;
    this.length = 1;
  }
  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
    return this.head;
  }
  append(value) {
    this.tail.next = new Node(value, null);
    this.tail = this.tail.next;
    this.length++;
    return this.head;
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
    let node = new Node(value, this.lookup(depth));
    this.lookup(depth - 1).next = node;
    this.length++;
    return this.head;
  }
  delete(depth) {
    if (depth >= this.length || this.length === 1)
      return console.log("Imposible delete the node at depth " + depth);

    if (depth === this.length - 1) {
      this.lookup(depth - 1).next = null;
    } else if (depth === 0) {
      this.head = this.lookup(1);
    } else {
      this.lookup(depth - 1).next = this.lookup(depth + 1);
    }
    this.length--;
    return this.head;
  }
}
