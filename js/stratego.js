
// Game pieces - class, fit inside game squares, number/logo on each
    // Start out on bottom (2 rows of 10?) DONE
    // label all pieces- 
        // 8 Scouts (rank - 9) DONE
        // 6 Bombs (rank - B) DONE
        // 5 Miners (rank - 8) DONE
        // 4 Seargents (rank - 7) DONE
        // 4 Lieutenants (rank - 6) DONE
        // 4 Captains (rank - 5) DONE
        // 3 Majors (rank - 4) DONE
        // 2 Colonels (rank - 3) DONE
        // 1 General (rank - 2) DONE
        // 1 Marshal (rank - 1) DONE
        // 1 Spy (rank - S) DONE
        // 1 Flag (rank - F) DONE
    // can be clicked and dragged by user, placed anywhere on first 4 rows
    // player 2 cannot see player 1 set their pieces 
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

    // Other stuff
        // Game board and pieces should SHRINK and maintain shape when page is minimized, not collapse

let game = {};

let gameSquares = {};

// on page load
for(let y = 1; y < 11; y++){
    $('.game').append(`<div class='game-column game-column-${y}'></div>`)
    for(let x = 10; x > 0; x--){
        const gameSquare = $('<div/>');
        gameSquare.addClass('square');
        gameSquare.addClass(`square-${y}-${x}`);
        $(`.game-column-${y}`).append(gameSquare);
        $(`.square-7-${x}`).addClass('blue-side');
        $(`.square-8-${x}`).addClass('blue-side');
        $(`.square-9-${x}`).addClass('blue-side');
        $(`.square-10-${x}`).addClass('blue-side');
        $(`.square-1-${x}`).addClass('red-side');
        $(`.square-2-${x}`).addClass('red-side');
        $(`.square-3-${x}`).addClass('red-side');
        $(`.square-4-${x}`).addClass('red-side');
        gameSquares[`square-${y}-${x}`] = {occupied: false};
        console.log(gameSquares);
    }
}

// set pieces function
for (let i = 1; i < 21; i++){
    $('.pieces').append(`<div class ='pieces-column pieces-column-${i}'></div>`)
    for (let j = 2; j > 0; j--){
        const gamePiece = $('<div/>');
        gamePiece.addClass('startingPiece');
        gamePiece.addClass(`startingPiece-${i}-${j}`);
        $(`.pieces-column-${i}`).append(gamePiece);
        $('.startingPiece-1-2').addClass('general');
        $('.startingPiece-1-1').addClass('marshal');
        $('.startingPiece-2-2').addClass('spy');
        $('.startingPiece-2-1').addClass('flag');
        $(`.startingPiece-3-${j}`).addClass('colonel');
        $(`.startingPiece-4-${j}`).addClass('major');
        $('.startingPiece-5-2').addClass('major');
        $('.startingPiece-5-1').addClass('miner');
        $(`.startingPiece-6-${j}`).addClass('miner');
        $(`.startingPiece-7-${j}`).addClass('miner');
        $(`.startingPiece-8-${j}`).addClass('captain');
        $(`.startingPiece-9-${j}`).addClass('captain');
        $(`.startingPiece-10-${j}`).addClass('lieutenant');
        $(`.startingPiece-11-${j}`).addClass('lieutenant');
        $(`.startingPiece-12-${j}`).addClass('sergeant');
        $(`.startingPiece-13-${j}`).addClass('sergeant');
        $(`.startingPiece-14-${j}`).addClass('bomb');
        $(`.startingPiece-15-${j}`).addClass('bomb');
        $(`.startingPiece-16-${j}`).addClass('bomb');
        $(`.startingPiece-17-${j}`).addClass('scout');
        $(`.startingPiece-18-${j}`).addClass('scout');
        $(`.startingPiece-19-${j}`).addClass('scout');
        $(`.startingPiece-20-${j}`).addClass('scout')
    }
}


// Dragging/dropping pieces function
    // Draggable 
        // no 2 pieces to 1 square
        // destroy once all are placed
    
$(".startingPiece").draggable({
    revert: "invalid",
    snap: true,
    snapMode: "inner",
    snapTolerance: 30,
});

// $(".startingPiece").mouseup(function() {
//     if ($(".blue-side").occupied === true){
//         console.log('you cant put that there')
//     }
// })

// Droppable
    // once piece has been placed, set gameSquares.[square-${x}-${y}].occupied to 'true', 
    // set '.droppabale:' 'disabled' to true. if piece is moved, reset disabled to 'false'
    // on .mouseup from 'startingpiece', change square.occupied = true;

$(".blue-side").droppable({
    accept: ".startingPiece",
    tolerance: "fit",
    greedy: true,
    drop: function(event, ui){
        this.occupied = true;
        $(this).droppable('disable')
        console.log($(ui.draggable).attr("class"))
        if (this.occupied = false){
            event.droppable('enable')
            console.log('you can put that there')
        }
    }
});

