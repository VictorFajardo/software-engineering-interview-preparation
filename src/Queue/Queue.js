const Node = require('./Node')

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    let node = new Node(val)
    if (!this.size) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    return ++this.size
  }

  dequeue() {
    if (this.size === 0) return null
    let node = this.first
    if (this.size === 1) {
      this.last = null
    }
    this.first = node.next
    this.size--
    return node.val
  }
}

module.exports = Queue