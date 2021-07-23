class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }

  pop() {
    if (this.length === 0) return undefined
    let node = this.head
    let newTail = node
    while (node.next) {
      newTail = node
      node = node.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return node
  }

  shift() {
    if (this.length === 0) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }

  unshift(val) {
    let node = new Node(val)
    if (!this.head) {
      this.tail = node
    } else {
      node.next = this.head
    }
    this.head = node
    this.length++
    return this
  }

  get(index) {
    if (index >= this.length || index < 0) return null
    let node = this.head
    for (let i = 0; i <= index - 1; i++) {
      node = node.next
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
    if (index > this.length || index < 0) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)
    let newNode = new Node(val)
    let prev = this.get(index - 1)
    newNode.next = prev.next
    prev.next = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index >= this.length || index < 0) return false
    if (index === 0) return !!this.shift()
    if (index === this.length - 1) return !!this.pop()
    let prev = this.get(index - 1)
    console.log(prev)
    let remove = prev.next
    prev.next = remove.next
    this.length--
    return remove

  }

  reverse() {
    if (this.length === 1) return this
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }

    return this
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

let MyList = new SinglyLinkedList()
MyList.push(20)
MyList.push(21)
MyList.push(22)
MyList.push(23)
MyList.print()
MyList.reverse()
MyList.print()

// console.log(MyList)