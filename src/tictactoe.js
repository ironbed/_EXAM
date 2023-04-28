class TicTacToe {
  board;
  actualPlayer;
  topMessage;
  bottomMessage;
  gameEnded;
  gameResult;
  constructor() {
    this.board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    this.actualPlayer = 'X';
    this.topMessage = 'Game Board Creation...';
    this.bottomMessage = 'Board Created.\nThe game will start with player X';
    this.gameEnded = false;
    this.gameResult = ' ';
  }

  start() {
    this.showBoard();
  }

  
  nextStep(row,col) {
    this.board[row-1][col-1] = this.actualPlayer;

    this.topMessage = 'Player '+this.actualPlayer+':';
    this.checkBoard();
    if (this.gameResult==' ') this.bottomMessage = '';
    if (this.gameResult=='X') this.bottomMessage = 'PLAYER X WON!';
    if (this.gameResult=='O') this.bottomMessage = 'PLAYER O WON!';
    if (this.gameResult=='D') this.bottomMessage = 'GAME ENDS WITH A DRAW!';
    

    if (this.actualPlayer=='X') this.actualPlayer = 'O'
    else this.actualPlayer = 'X';
  }

  checkBoard() {

    return this.gameResult;
  
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
