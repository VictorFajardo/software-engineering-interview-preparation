const Node = require('./Node')

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    let node = new Node(val)
    if (this.size === 0) {
      this.first = node
      this.last = node
    } else {
      node.next = this.first
      this.first = node
    }
    this.size++
  }

  pop() {
    if (!this.size) return null
    let node = this.first
    if (this.size === 1) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return node.val
  }

}

module.exports = Stack