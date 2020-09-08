class Stack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }

  push(element) {
    this.stack[this.top] = element;
    this.top = this.top + 1;
  }

  pop() {
    // this.stack[this.top] = this.stack[this.top - 1];
    this.top = this.top - 1
    const element = this.stack[this.top]
    // override old element that we remove
    this.stack[this.top] = null;
    return element;
    //return some value
  }
}

const stack = new Stack();