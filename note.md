flow:

1. create player (2 player)
2. create two 10x10 board and object to save ship & hit/miss data (grid.js, gameboard.js)
   - both player place 5 ship on the board and object (ship.js)
3. first player make a hit (gameboard, receiveAttack)

   1. check for hit or miss(gameboard, receiveAttack)
   2. if hit, reduce the hit ship hp down and check if the ship isSunk

      - if ship isSunk, check if there are any other ship left
      - if no ship left game end
      - if still have ship alive, the player take a turn again and repeat

4. if miss, record the coordinate missed to 2nd player board
5. now its second player turn, repeat

task:

~~1. after placing the ship, show it location on the UI~~
only show ship location for player, not computer

game master:
setup player
setup board
setup ship placement

game flow:

1. show a screen for board placement
2. for now, only randomize placement with a button to randomize

gameboard->placeship->createGrid

GameMaster will randomly place ship for player
GameMaster purpose:
create player and board
place ship for player
