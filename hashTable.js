class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let chart of key) {
      hash += chart.charCodeAt(0);
    }
    hash = hash % this.data.length;
    return hash;
  }

  insert(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    if (this.data[address].find((bucket) => bucket.key === key)) {
      return console.log("The key was assigned before");
    }
    this.data[address].push({ key, value });
    return this.data;
  }

  search(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    return currentBucket
      ? currentBucket.find((element) => element.key === key).value
      : undefined;
  }
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      const index = currentBucket.findIndex((element) => element.key === key);
      if (index !== -1) {
        this.data[address].length === 1
          ? delete this.data[address]
          : this.data[address].splice(index, 1);
      }
      return this.data;
    }
  }
  keys() {
    return this.data.flat().map((element) => element.key);
  }
}
