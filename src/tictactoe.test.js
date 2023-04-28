const TicTacToe = require('./tictactoe');

describe('When create a TicTacToe game', () => {
  it('should have defined', () => {
    const game = new TicTacToe();
    expect(game).not.toBeUndefined();
  });
  it('the game should have a board defined', () => {
    const game = new TicTacToe();
    expect(game.board).not.toBeUndefined();
    expect(game.board.toString()).toBe([[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']].toString());
  });
  it('the game should have an actual Player and it should be X', () => {
    const game = new TicTacToe();
    expect(game.actualPlayer).not.toBeUndefined();
    expect(game.actualPlayer).toBe('X');
  });
  it('the game should have a message on the top with text: "Game Board Creation..."', () => {
    const game = new TicTacToe();
    expect(game.topMessage).not.toBeUndefined();
    expect(game.topMessage).toBe('Game Board Creation...');
  });
  it('the game should have a message on the bottom with text: "Board Created.\nThe game will start with player X"', () => {
    const game = new TicTacToe();
    expect(game.bottomMessage).not.toBeUndefined();
    expect(game.bottomMessage).toBe('Board Created.\nThe game will start with player X');
  });
  it('the game should have a flag to show the game ended with ', () => {
    const game = new TicTacToe();
    expect(game.gameEnded).not.toBeUndefined();
    expect(game.gameEnded).toBe(false);
  });
});

describe('When the TicTacToe game started', () => {
  it('the game should return:\n'+
    'Game Board Creation…\n'+
    ' | | \n'+
    '-+-+-\n'+
    ' | | \n'+
    '-+-+-\n'+
    ' | | \n'+
    'Board Created.\n'+
    'The game will start with player X\n'
  , () => {
    const game = new TicTacToe();
    game.start();
    expect(game.showBoard()).toBe('Game Board Creation...\n'+
    ' | | \n'+
    '-+-+-\n'+
    ' | | \n'+
    '-+-+-\n'+
    ' | | \n'+
    'Board Created.\n'+
    'The game will start with player X\n');
  });
});

describe('At next step', () => {
  it('when actual player is X and step made on row=1 and column=1'
  , () => {
    const game = new TicTacToe();
    game.start();
    expect(game.actualPlayer).toBe('X');
    game.nextStep(1,1);
    expect(game.board[1-1][1-1]).toBe('X');
  });
  it('when actual player is O and step made on row=2 and column=2'
  , () => {
    const game = new TicTacToe();
    game.start();
    game.actualPlayer = 'O';
    expect(game.actualPlayer).toBe('O');
    game.nextStep(3,1);
    expect(game.board[3-1][1-1]).toBe('O');
  });
});

describe('After next step made', () => {
  it('by player X then actual player should change to O'
  , () => {
    const game = new TicTacToe();
    game.start();
    expect(game.actualPlayer).toBe('X');
    game.nextStep(1,1);
    expect(game.actualPlayer).toBe('O');
  });
  it('by player O then actual player should change to X'
  , () => {
    const game = new TicTacToe();
    game.start();
    game.actualPlayer = 'O';
    expect(game.actualPlayer).toBe('O');
    game.nextStep(1,1);
    expect(game.actualPlayer).toBe('X');
  });
});

describe('When next step makes', () => {
  it('by player X then top message should be "Player X:"'
  , () => {
    const game = new TicTacToe();
    game.start();
    expect(game.actualPlayer).toBe('X');
    game.nextStep(1,1);
    expect(game.topMessage).toBe('Player X:');
  });
  it('by player O then top message should be "Player O:"'
  , () => {
    const game = new TicTacToe();
    game.start();
    game.actualPlayer='O';
    expect(game.actualPlayer).toBe('O');
    game.nextStep(1,1);
    expect(game.topMessage).toBe('Player O:');
  });
  it('and the game result is empty character, the bottom message should be empty'
  , () => {
    const game = new TicTacToe();
    game.start();    
    game.nextStep(1,1);
    expect(game.gameResult).toBe(' ');
    expect(game.bottomMessage).toBe('');
  });
  it('and the game result is X, the bottom message should be "PLAYER X WON!"'
  , () => {
    const game = new TicTacToe();
    game.start();    
    game.gameResult = 'X';
    game.nextStep(1,1);
    expect(game.gameResult).toBe('X');
    expect(game.bottomMessage).toBe('PLAYER X WON!');
  });
  it('and the game result is O, the bottom message should be "PLAYER O WON!"'
  , () => {
    const game = new TicTacToe();
    game.start();    
    game.gameResult = 'O';
    game.nextStep(1,1);
    expect(game.gameResult).toBe('O');
    expect(game.bottomMessage).toBe('PLAYER O WON!');
  }); 
  it('and the game result is D, the bottom message should be "GAME ENDS WITH A DRAW!"'
  , () => {
    const game = new TicTacToe();
    game.start();    
    game.gameResult = 'D';
    game.nextStep(1,1);
    expect(game.gameResult).toBe('D');
    expect(game.bottomMessage).toBe('GAME ENDS WITH A DRAW!');
  }); 
});

describe('When the game started', () => {
  it('with a random function values can be generated between 1 and 3"'
  , () => {
    const game = new TicTacToe();
    expect(game.random123()).toBeLessThanOrEqual(3);
    expect(game.random123()).toBeGreaterThanOrEqual(1);
  });
});