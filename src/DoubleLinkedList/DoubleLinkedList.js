const Node = require('./Node')

class DoubleLinkList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let pushedNode = new Node(val)
    if (!this.head) {
      this.head = pushedNode
    } else {
      this.tail.next = pushedNode
      pushedNode.prev = this.tail
    }
    this.tail = pushedNode
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }

  shift() {
    if (this.length === 0) return undefined
    let shiftedNode = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shiftedNode.next
      this.head.prev = null
      shiftedNode.next = null
    }
    this.length--
    return shiftedNode
  }

  unshift(val) {
    let unshiftedNode = new Node(val)
    if (this.length === 0) {
      this.head = unshiftedNode
      this.tail = unshiftedNode
    } else {
      this.head.prev = unshiftedNode
      unshiftedNode.next = this.head
      this.head = unshiftedNode
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return null
    let dir = index < this.length / 2 ? true : false
    let node = dir ? this.head : this.tail
    let count = dir ? 0 : this.length - 1
    while(count !== index) {
      node = dir ? node.next : node.prev
      dir ? count++ : count--
    }
    return node
  }

  set(index, val) {
    let node = this.get(index)
    if (node) {
      node.val = val
      return true
    }
    return false
  }

  insert(index, val) {
    if (index < 0 || index > this.length - 1) return false
    if (index === 0) this.unshift(val)
    else if (index === this.length - 1) this.push(val)
    else {
      let newNode = new Node(val)
      let oldNode = this.get(index)
      newNode.prev = oldNode.prev
      newNode.prev.next = newNode
      newNode.next = oldNode
      oldNode.prev = newNode
    }
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let node = this.get(index)
    node.prev.next = node.next
    node.next.prev = node.prev
    node.next = null
    node.prev = null
    this.length--
    return node
  }

  reverse() {
    if (this.length === 1) return this
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      node.prev = next
      prev = node
      node = next
    }
  }

  print() {
    let arr = []
    let node = this.head
    for (let i = 0; i < this.length; i++) {
      arr.push(node.val)
      node = node.next
    }
    console.log(arr)
  }

}

module.exports = DoubleLinkList