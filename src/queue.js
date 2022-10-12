const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class Queue {

  constructor() {
    this.queue = new ListNode();
    this.length = 0;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.length == 0) {
      this.queue.value = value;
    }

    else {
      let newNode = new ListNode();
      let curr = this.queue;
      while (true) {
        if (!curr.next) {
          curr.next = newNode;
          newNode.value = value;
          break;
        }
        curr = curr.next;
      }
    }

    this.length++;
  }

  dequeue() {
    let headValue = this.queue.value;
    this.queue = this.queue.next;
    this.length--;
    return headValue;
  }
}

module.exports = {
  Queue
};
