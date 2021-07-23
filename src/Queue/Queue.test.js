const Node = require('./Node')
const Queue = require('./Queue')

describe('Test Queue', () => {

  let queue

  beforeEach(() => {
    queue = new Queue()
  })

  test('Integrity', () => {
    expect(queue.first).toBe(null)
    expect(queue.last).toBe(null)
    expect(queue.size).toBe(0)
  })

  test('Enqueue', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.first.val).toBe(1)
    expect(queue.last.val).toBe(3)
    expect(queue.size).toBe(3)
  })

  test('Dequeue', () => {
    expect(queue.dequeue()).toBe(null)
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
    expect(queue.dequeue()).toBe(3)
  })

})