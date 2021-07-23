const Node = require('./Node')
const BinarySearchTree = require('./BST')

describe('BST Test', () => {

  let bst

  beforeEach(() => {
    bst = new BinarySearchTree()
  })

  test('Integrity', () => {
    expect(bst.root).toBe(null)
  })

  test('Insert', () => {
    bst.insert(12)
    bst.insert(13)
    bst.insert(11)
    bst.insert(17)
    bst.insert(16)
    bst.insert(14)
    bst.insert(15)
    bst.insert(5)
    bst.insert(8)
    bst.insert(3)
    expect(bst.root.value).toBe(12)
    expect(bst.root.left.value).toBe(11)
    expect(bst.root.left.left.value).toBe(5)
    expect(bst.root.left.left.right.value).toBe(8)
    expect(bst.root.left.left.left.value).toBe(3)
    expect(bst.root.right.value).toBe(13)
    expect(bst.root.right.right.value).toBe(17)
    expect(bst.root.right.right.left.value).toBe(16)
    expect(bst.root.right.right.left.left.value).toBe(14)
    expect(bst.root.right.right.left.left.right.value).toBe(15)
  })

  test('Search', () => {
    bst.insert(12)
    bst.insert(13)
    bst.insert(11)
    bst.insert(17)
    bst.insert(16)
    bst.insert(14)
    bst.insert(15)
    bst.insert(5)
    bst.insert(8)
    bst.insert(3)
    expect(bst.search(0)).toBe(false)
    expect(bst.search(12)).toBe(true)
    expect(bst.search(13)).toBe(true)
    expect(bst.search(10)).toBe(false)
    expect(bst.search(17)).toBe(true)
    expect(bst.search(16)).toBe(true)
    expect(bst.search(14)).toBe(true)
    expect(bst.search(9)).toBe(false)
    expect(bst.search(3)).toBe(true)
  })

  test('BFS', () => {
    bst.insert(10)
    bst.insert(6)
    bst.insert(15)
    bst.insert(3)
    bst.insert(8)
    bst.insert(20)
    expect(bst.BFS()).toEqual([10,6,15,3,8,20])
  })

  test('DFS Pre Order', () => {
    bst.insert(10)
    bst.insert(6)
    bst.insert(15)
    bst.insert(3)
    bst.insert(8)
    bst.insert(20)
    expect(bst.DFSPreOrder()).toEqual([10,6,3,8,15,20])
  })

  test('DFS Post Order', () => {
    bst.insert(10)
    bst.insert(6)
    bst.insert(15)
    bst.insert(3)
    bst.insert(8)
    bst.insert(20)
    expect(bst.DFSPostOrder()).toEqual([3,8,6,20,15,10])
  })

  test('DFS Post Order', () => {
    bst.insert(10)
    bst.insert(6)
    bst.insert(15)
    bst.insert(3)
    bst.insert(8)
    bst.insert(20)
    expect(bst.DFSInOrder()).toEqual([3,6,8,10,15,20])
  })
})