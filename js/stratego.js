
// Game pieces - class, fit inside game squares, number/logo on each
    // Start out on bottom
    // can be placed anywhere on first 4 rows
    // once all pieces are placed, game start
    // container for captured pieces

// Game start - function, button
    // Player 1 moves - function, onclick
        // clicks piece
        // clicks square they want piece to move to
        // move recorded in a message
    // Player 2 moves - function, onclick
        // clicks piece
        // clicks square they want piece to move to
        // move recorded in a message

    // Move if checks 
        // if player moves to a space with piece on same team already there, not allowed, choose another move
        // if player moves to a space in a lake, not allowed, choose another move
        // if player tries to move diagonally, move not allowed, choose another move
        // if player (besides scout) tries to move more than once space, not allowed, choose another move
        // if player tries to move bomb, not allowed, choose another move
        // if player tries to move flag, not allowed, choose another move
    
    //Attack if checks
        // if player moves to a space occupied by opponent, attack function initiated
        // 2 pieces compared, both player see both pieces
        // piece with higher rank wins. piece with lower rank removed from play, put in captured pieces container
            // unless it's a spy attacking a marshal or general, then spy wins
        // if player moves to a space occupied by a bomb, that piece removed, put in captured pieces container
            // unless it's a miner, then bomb removed, put in captured pieces container 
        // if player moves to space occupied by flag, game over. player wins

    // Tie game scenarios
        // 1. Each Flag is surrounded by bombs and neither player has a miner, and there are insufficient number of 
        // moveable pieces or of insufficient rank for either player to corner and capture all of the opponent's 
        // moveable pieces (automatic draw);
        // 2. An opponent's Flag is exposed, but the player has only one moveable piece, the opponent has 
        // only one moveable piece but of a higher rank and it guards the Flag, so that it is impossible for the player 
        // to either capture the Flag or the higher ranked piece (automatic draw);
        // 3. It is possible for both players to have one mobile piece remaining, and they are of equal rank. If one 
        // piece strikes the other, both are removed, leaving no mobile pieces on the board. (automatic draw).
        // 4. There are a few "indian stand-off" situations, where one or more pairs of pieces shuffle around endlessly 
        // in order to maintain some advantage or prevent some advantage by the opponent, and no progress can be made 
        // (players choose to declare draw);

for(let y = 1; y < 11; y++){
    $('.game').append(`<div class='game-column game-column-${y}'></div>`)
    for(let x = 10; x > 0; x--){
        const gameSquare = $('<div/>')
        gameSquare.addClass('square')
        gameSquare.addClass(`square-${y}-${x}`)
        $(`.game-column-${y}`).append(gameSquare)
    }
}


    

