class TicTacToe {
  board;
  actualPlayer;
  topMessage;
  bottomMessage;
  gameEnded;
  constructor() {
    this.board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    this.actualPlayer = 'X';
    this.topMessage = 'Game Board Creation...';
    this.bottomMessage = 'Board Created.\nThe game will start with player X';
    this.gameEnded = false;
  }
}

module.exports = TicTacToe;
