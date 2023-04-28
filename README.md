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

US-3:
The TicTacToe game should have a function to make next step on board with actual Player

UAT-3.1
Given a TicTacToe game
When the actual player is 'X' and and make step to row=1 and column=1
Then the board should change to 'X' on row=1 anc column=1

UAT-3.2
Given a TicTacToe game
When the actual player is 'O' and and make step to row=3 and column=1
Then the board should change to 'O' on row=3 anc column=1

US-4:
When actual Player made his step the actual Player should change

UAT-4.1
Given the actual player as 'X'
When he made the next step
Then actual player should change to 'O'

UAT-4.2
Given the actual player as 'O'
When he made the next step
Then actual player should change to 'X'

US-5:
When next step makes the game should show updated top message.

UAT-5.1
Given the top message
When actual player is 'X'
Then top message should be: "Player X:"

UAT-5.2
Given the top message
When actual player is 'O'
Then top message should be: "Player O:"

US-6
When next step makes the game should check the board and should update bottom message with possible result of the game.

UAT-6.1
Given a function to check board
When the game result is ' '
Then bottom message should be empty

UAT-6.2
Given a function to check board
When the game result is 'X'
Then bottom message should "PLAYER X WON!"

UAT-6.3
Given a function to check board
When the game result is 'O'
Then bottom message should "PLAYER O WON!"

UAT-6.4
Given a function to check board
When the game result is 'D'
Then bottom message should "GAME ENDS WITH A DRAW!"

US-7:
At game creation, steps for players should created randomly

UAT-7.1
Given a Random123 function
When it called
Then it should return a number between 1 and 3

UAT-7.2
Given a Step array
When I created the game
Then it filled 9x2 number with Random123 function

US-8
when the game started the randomly created steps should take on the board

UAT-8.1
Given the Step array
When the steps processed
Then the board should have values filled

US-9
When the board checked the game has to show the results 
