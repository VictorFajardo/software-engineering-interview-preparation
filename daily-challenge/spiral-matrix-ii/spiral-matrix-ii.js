/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n) => {
  const matrix = new Array(n).fill(0).map(() => new Array(n))
  let layer = 0
  let counter = 1

  while (counter <= n * n) {
    for (let i = layer; i < n - layer; i++) {
      matrix[layer][i] = counter
      counter++
    }

    for (let i = layer + 1; i < n - layer; i++) {
      matrix[i][n - layer - 1] = counter
      counter++
    }

    for (let i = layer + 1; i < n - layer; i++) {
      matrix[n - layer - 1][n - 1 - i] = counter
      counter++
    }

    for (let i = layer + 1; i < n - layer - 1; i++) {
      matrix[n - 1 - i][layer] = counter
      counter++
    }
    layer++
  }

  return matrix
};
