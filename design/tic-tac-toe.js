class TicTacToe {
  constructor(n) {
    this.board = new Array(n).fill(0).map(() => new Array(n).fill(' '))
    this.n = n
    this.rows = new Array(n).fill(0)
    this.columns = new Array(n).fill(0)
    this.diagonal = 0
    this.antiDiagonal = 0
  }

  move(row, col, player) {
    this.board[row][col] = player === 1 ? 'X' : 'O'
    this.rows[row] += player === 1 ? 1 : -1
    this.columns[col] += player === 1 ? 1 : -1
    if (row === col) this.diagonal += player === 1 ? 1 : -1
    if (row + col === this.n - 1) this.antiDiagonal += player === 1 ? 1 : -1
    if (this.rows[row] === this.n || this.columns[col] === this.n || this.diagonal === this.n || this.antiDiagonal === this.n) this.print(player)
    else this.print(0)
  }

  print(player) {
    console.log(!player ? `No winner!` : `Winner is Player ${player}`)
    this.board.forEach(row => console.log(row))
  }
}

const game = new TicTacToe(3)
game.move(0,0,1)
game.move(1,1,1)
game.move(2,0,2)
game.move(0,2,2)
game.move(2,2,1)