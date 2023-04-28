# TicTacToe repo
Developing a Tic-Tac-Toe game
The system should run in BOT mode (random BOT moves for player X & O) to print on the screen all the
player's moves (with a 2 seconds timeout between each round) until someone won or the game ends with
a draw.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

US-1 : 
The TicTacToe (game) has a board, has an actual player, a topmessage, a bottommessage and a flag to show if the game ended. 

UAT-1 
Given a Tictactoe game
When I create a new Tictactoe
Then the result should be defined

UAT-1.2
Given a defined Tictactoe game
When I create the game 
Then an empty 3x3 board should be defined

UAT-1.3
Given a defined Tictactoe game
When I create the game 
Then the actual Player should be defined and should be X

UAT-1.4
Given a defined Tictactoe game
When I create the game 
Then it should have a message on the top with starting text: "Game Board Creation..."

UAT-1.5
Given a defined Tictactoe game
When I create the game 
Then it should have a message on the bottom with starting text: 
"Board Created.\nThe game will start with player X"

UAT-1.6
Given a defined Tictactoe game
When I create the game 
Then it should have a flag to show the game ended with "false" value

US-2:
The TictacToe game should show an empty board with starting messages when the game started.

UAT-2.1:
Given a TictTactoe game
When the game started
Then the game should show the top message, the empty board and the bottom message like this:
"Game Board Creation...
 | | 
-+-+-
 | | 
-+-+-
 | | 
Board Created.
The game will start with player X"


