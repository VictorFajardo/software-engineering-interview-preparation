/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  let counter = 1
  let dir = 0
  let row = 0
  let col = 0

  while (counter <= n * n) {
    matrix[row][col] = counter
    counter++

    const nextRow = row + directions[dir][0]
    const nextCol = col + directions[dir][1]

    if (nextRow < 0 || nextRow > n - 1 || nextCol < 0 || nextCol > n - 1 || matrix[nextRow][nextCol] !== 0) dir = (dir + 1) % 4

    row += directions[dir][0]
    col += directions[dir][1]
  }

  return matrix
};
