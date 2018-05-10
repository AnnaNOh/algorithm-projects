// Queue with max

class maxQueue {
  constructor() {
    this.queue = [];
    this.max = [];
  }

  enqueue(element) {
    this.queue.push(element);

    if (element > this.max[0] || this.max.length === 0) {
      this.max = [element];
    } else {
      let i = this.max.length - 1;
      while (element > this.max[i]) {
        i = i - 1;
      }
      this.max.splice(i + 1);
      this.max.push(element);
    }
  }

  dequeue() {
    let element = this.queue.shift();

    if (this.queue[0] === this.max[0]) {
      this.max.shift();
    }
    return element;
  }
}

let a = new maxQueue();
a.enqueue(4);
a.enqueue(2);
a.enqueue(3);
console.log(a);
a.enqueue(4);
a.enqueue(5);
console.log(a);
a.enqueue(4);
console.log(a);
a.dequeue();
console.log(a);
a.dequeue();
a.dequeue();
console.log(a);
a.enqueue(3);
console.log(a);
