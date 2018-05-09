// ring buffered dynamic array with classical inheritance
// can't figure out how to make [] and []= functions

let staticArray = function(length) {
  return new Array(length);
};

class dynamicArray {
  constructor() {
    this.capacity = 8;
    this.count = 0;
    this.store = staticArray(this.capacity);
    this.startIdx = 0;
  }

  resize() {
    this.capacity = this.capacity * 2;
    let temp = this.store;
    this.store = staticArray(this.capacity);
    for (let i = 0; i < this.count; i++) {
      this.store[i] = temp[(this.startIdx + i) % (this.capacity / 2)];
    }
    this.startIdx = 0;
  }

  pop() {
    let removedIdx = (this.startIdx + this.count - 1) % this.capacity;
    let removed = this.store[removedIdx];
    this.store[removedIdx] = null;
    this.count -= 1;
    return removed;
  }

  push(element) {
    // resize if full
    if (this.count === this.capacity) {
      this.resize();
    }

    this.store[(this.startIdx + this.count) % this.capacity] = element;
    this.count += 1;
  }

  unshift(element) {
    // resize if full
    if (this.count === this.capacity) {
      this.resize();
    }
    // move startIdx left by 1, unless it needs to be looped to the end
    this.startIdx -= 1;
    if (this.startIdx < 0) {
      this.startIdx += this.capacity;
    }
    this.store[this.startIdx] = element;
    this.count += 1;
  }

  shift() {
    let removed = this.store[this.startIdx];
    this.store[this.startIdx] = null;

    this.startIdx = (this.startIdx + 1) % this.capacity;
    this.count -= 1;
    return removed;
  }
}

// test

let a = new dynamicArray();
a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);
a.push(6);
a.push(7);
a.push(8);
a.push(9);
a.push(10);
a.push(11);
a.unshift(0);
a.unshift(-1);
a.unshift(-2);
a.unshift(-3);
a.unshift(-4);
a.unshift(-5);
a.shift();
a.pop();
console.log(a);
