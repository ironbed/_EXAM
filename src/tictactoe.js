class TicTacToe {
  board;
  actualPlayer;
  topMessage;
  constructor() {
    this.board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    this.actualPlayer = 'X';
    this.topMessage = 'Game Board Creation...';
  }
}

module.exports = TicTacToe;
