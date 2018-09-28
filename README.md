
<<<STRATEGO>>>


User Stories:
Each player receives the following 40 pieces (rank in parentheses), which they can arrange however they choose on their 4 x 10 side of a 10 x 10 gameboard:
- Bomb (B) 6x; Immovable, if attacked by any piece except a Miner, attacker dies and bomb does not
- Marshal (1) 1x; can only be killed by Spy or Bomb
- General (2) 1x
- Colonel (3) 2x
- Major (4) 3x
- Captain (5) 4x
- Lieutenant (6) 4x
- Seargent (7) 4x
- Miner (8) 5x; can diffuse bombs
- Scout (9) 8x; can move any distance in a straight line as long as path does not include other pieces or lakes
- Spy (S) 1x; can defeat Marshal or General, but only if it attacks first
- Flag (F) 1x; Immovable, if captured game ends

Gameplay Rules:
- Players must move a piece on their turn, no passing
- A player clicks a piece to indicate that he/she wants to move it, then clicks the square he/she wants to move it to
- No 2 pieces can occupy the same space simultaneously
- With the exception of scouts, bombs, and flags, pieces can only move 1 space at a time forwards, backwards, or sideways. No diagonal movement. 
- Pieces cannot cross the lakes in the middle of the board
- To attack, a player moves their piece to a square occuppied by an opposing piece. The piece with the higher rank wins and the piece with the lower rank is removed from play. If both pieces are the same rank, they are both removed. A spy can only defeat a Flag, Marshal or General, if any piece besides a Miner attacks a Bomb, it dies and the Bomb remains
- Once a Flag has been captured, the game ends
- If all human pieces (all pieces except bombs or flags) are captured, the game ends
- There are a few scenarios in which the game could end in a draw, listed below:
        - Each Flag is surrounded by bombs and neither player has a miner, and there are insufficient number of moveable pieces or of insufficient rank for either player to corner and capture all of the opponent's moveable pieces (automatic draw);
        - An opponent's Flag is exposed, but the player has only one moveable piece, the opponent has only one moveable piece but of a higher rank and it guards the Flag, so that it is impossible for the player to either capture the Flag or the higher ranked piece (automatic draw);
        - It is possible for both players to have one mobile piece remaining, and they are of equal rank. If one piece strikes the other, both are removed, leaving no mobile pieces on the board. This may be defined as a draw (automatic draw).
        - There are a few "indian stand-off" situations, where one or more pairs of pieces shuffle around endlessly in order to maintain some advantage or prevent some advantage by the opponent, and no progress can be made (players choose to declare draw);
    
    WIREFRAME
    https://i.imgur.com/YQnTYTy.jpg
    
    ****************************************************************************************************************************************************************
MINIMUM VIABLE PRODUCT
    - Basic gameboard with all the pieces numberd/labelled accordingly
    - Messages displayed detailing each move
    - Captured pieces/pieces no longer in play displayed
    - Win or draw outcomes all programmed

EXTRA STUFF 
    - Gameboard backgrounds that can be selected/change randomly with each game
    - Identifier images to display on game pieces
    - Effects, visual and sonic, (such as explosions) when pieces move, are captured, game begins, and game ends
    - Change game board views
    - Players can select different colors (besides red and blue)
    - Players can view/save log of moves after each game

