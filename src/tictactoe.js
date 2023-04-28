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

  start() {
    this.showBoard();
  }

  
  nextStep(row,col) {
    this.board[row-1][col-1] = this.actualPlayer;

    if (this.actualPlayer=='X') this.actualPlayer = 'O'
    else this.actualPlayer = 'X';
  }

  showBoard() {
    let showScreen ='';
    showScreen = this.topMessage+'\n'+
    this.board[0][0]+'|'+this.board[0][1]+'|'+this.board[0][2]+'\n'+
    '-+-+-\n'+
    this.board[1][0]+'|'+this.board[1][1]+'|'+this.board[1][2]+'\n'+
    '-+-+-\n'+
    this.board[2][0]+'|'+this.board[2][1]+'|'+this.board[2][2]+'\n'+
    this.bottomMessage+'\n';
    console.log(showScreen);
    return showScreen;

  }

}

module.exports = TicTacToe;
