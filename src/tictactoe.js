class TicTacToe {
  board;
  actualPlayer;
  constructor() {
    this.board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    this.actualPlayer = 'X';
  }
}

module.exports = TicTacToe;
