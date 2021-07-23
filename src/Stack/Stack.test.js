const Stack = require('./Stack')
const Node =  require('./Node')

describe('Test Stack', () => {

  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  test('Integrity', () => {
    expect(stack.first).toBe(null)
    expect(stack.last).toBe(null)
    expect(stack.size).toBe(0)

  })

  test('Push', () => {
    stack.push('1')
    stack.push('2')
    stack.push('3')
    expect(stack.first.val).toBe('3')
    expect(stack.last.val).toBe('1')
    expect(stack.size).toBe(3)
  })

  test('Pop', () => {
    expect(stack.pop()).toBe(null)
    stack.push('1')
    stack.push('2')
    stack.push('3')
    expect(stack.pop()).toEqual('3')
    expect(stack.pop()).toEqual('2')
    expect(stack.pop()).toEqual('1')
  })

})