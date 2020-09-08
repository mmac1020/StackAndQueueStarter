class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.queue[this.tail] = element;
    this.tail = this.tail + 1;
  }

  dequeue() {
    const element = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = this.head + 1;
    return element;
  }
}

const queue = new Queue();