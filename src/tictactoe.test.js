const TicTacToe = require('./TicTacToe');

describe('When create a TicTacToe game', () => {
  it('should have defined', () => {
    const game = new TicTacToe();
    expect(game).not.toBeUndefined();
  });
});
