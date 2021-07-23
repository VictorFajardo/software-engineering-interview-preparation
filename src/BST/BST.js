const Node = require('./Node')

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    let node = new Node(val)
    if (!this.root) {
      this.root = node
      return this
    }
    let current = this.root
    while (true) {
      if (val > current.value) {
        if (!current.right) {
          current.right = node
          return this
        } else current = current.right
      } else {
        if (!current.left) {
          current.left = node
          return this
        } else current = current.left
      }
    }
  }

  search(val) {
    if (!this.root) return false
    let current = this.root
    while (current !== null) {
      if (val > current.value) {
        current = current.right
      } else if (val < current.value) {
        current = current.left
      } else return true
    }
    return false
  }

  BFS() {
    let queue = []
    let data = []
    let node = this.root
    queue.push(node)
    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }

  
  DFSPreOrder() {
    let data = []
    let traverse = (node) => {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }

  DFSPostOrder() {
    let data = []
    let traverse = (node) => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }
  
  DFSInOrder() {
    let data = []
    let traverse = (node) => {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}

module.exports = BinarySearchTree