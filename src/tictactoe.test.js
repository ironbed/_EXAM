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
});
