
// Game pieces - class, fit inside game squares, number/logo on each
    // Start out on bottom (2 rows of 10?) DONE
    // label all pieces- 
        // 8 Scouts (rank - 2) DONE
        // 6 Bombs (rank - 11) DONE
        // 5 Miners (rank - 3) DONE
        // 4 Seargents (rank - 4) DONE
        // 4 Lieutenants (rank - 5) DONE
        // 4 Captains (rank - 6) DONE
        // 3 Majors (rank - 7) DONE
        // 2 Colonels (rank - 8) DONE
        // 1 General (rank - 9) DONE
        // 1 Marshal (rank - 10) DONE
        // 1 Spy (rank - 1) DONE
        // 1 Flag (rank - 0) DONE
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

let game = {};

let gameBoard;

const ranks = {
    bomb: 11,
    marshal: 10,
    general: 9,
    colonel: 8,
    major: 7,
    captain: 6,
    lieutenant: 5,
    seargent: 4,
    miner: 3,
    scout: 2,
    spy: 1,
    flag: 0
}

// Object for ranks

// Mobility (method?) for all will be same - 1 space forward, back, left, or right. 
    // Only exception is Scout who can move any amount of spaces in same directions
    // Class that extends 'Soldier' for multiple-piece ranks? i.e. everything except General/Marshal/Spy

// These pieces can't move once set
// Rank for Flag will be 0 since it can be captured by all Soldier pieces, and include a method to end game
// Rank for Bomb will transcend all soldier pieces except Miner

// Questions for Ryan:
    // How do I link js objects with html elements?
    // What is the best way to store values for gameplay? I was thinking an array that contains each square,
    // whether or not it is occupied, and if it is, the piece occupying it. Is this possible and/or practical?
    // There are several scenarios for a tie game. Could I write these as functions and set event listeners to 
    // call on them when certain piece combinations and/or gameboard configurations occur?
    // How do I hide one side's pieces while the other side is setting up?
    // How do I make pieces shrink with gameboard when page is collapsed?
    // I am assuming this will be player vs. computer. If not... lots more questions!

// GENERATE GAME BOARD FUNCTION

for(let y = 1; y < 11; y++){
    $('.game').append(`<div class='game-column game-column-${y}'></div>`)
    for(let x = 10; x > 0; x--){
        const gameSquare = $('<div/>');
        gameSquare.addClass('square');
        gameSquare.addClass(`square-${y}-${x}`);
        gameSquare.attr('x', x);
        gameSquare.attr('y', y);
        $(`.game-column-${y}`).append(gameSquare);
        $(`.square-7-${x}`).addClass('blue-side');
        $(`.square-8-${x}`).addClass('blue-side');
        $(`.square-9-${x}`).addClass('blue-side');
        $(`.square-10-${x}`).addClass('blue-side');
        $(`.square-1-${x}`).addClass('red-side');
        $(`.square-2-${x}`).addClass('red-side');
        $(`.square-3-${x}`).addClass('red-side');
        $(`.square-4-${x}`).addClass('red-side');
    }
}

// GENERATE PIECES FUNCTIONS

for (let i = 1; i < 21; i++){
    $('.pieces').append(`<div class ='blue-pieces-column blue-pieces-column-${i}'></div>`)
    for (let j = 2; j > 0; j--){
        const gamePiece = $('<div/>');
        gamePiece.addClass('blue-startingPiece');
        gamePiece.addClass(`blue-startingPiece-${i}-${j}`);
        $(`.blue-pieces-column-${i}`).append(gamePiece);
        $('.blue-startingPiece-1-2').addClass('general');
        $('.blue-startingPiece-1-1').addClass('marshal');
        $('.blue-startingPiece-2-2').addClass('spy');
        $('.blue-startingPiece-2-1').addClass('flag');
        $(`.blue-startingPiece-3-${j}`).addClass('colonel');
        $(`.blue-startingPiece-4-${j}`).addClass('major');
        $('.blue-startingPiece-5-2').addClass('major');
        $('.blue-startingPiece-5-1').addClass('miner');
        $(`.blue-startingPiece-6-${j}`).addClass('miner');
        $(`.blue-startingPiece-7-${j}`).addClass('miner');
        $(`.blue-startingPiece-8-${j}`).addClass('captain');
        $(`.blue-startingPiece-9-${j}`).addClass('captain');
        $(`.blue-startingPiece-10-${j}`).addClass('lieutenant');
        $(`.blue-startingPiece-11-${j}`).addClass('lieutenant');
        $(`.blue-startingPiece-12-${j}`).addClass('sergeant');
        $(`.blue-startingPiece-13-${j}`).addClass('sergeant');
        $(`.blue-startingPiece-14-${j}`).addClass('bomb');
        $(`.blue-startingPiece-15-${j}`).addClass('bomb');
        $(`.blue-startingPiece-16-${j}`).addClass('bomb');
        $(`.blue-startingPiece-17-${j}`).addClass('scout');
        $(`.blue-startingPiece-18-${j}`).addClass('scout');
        $(`.blue-startingPiece-19-${j}`).addClass('scout');
        $(`.blue-startingPiece-20-${j}`).addClass('scout')
    }
}

for (let a = 1; a < 21; a++){
    $('.pieces').append(`<div class ='red-pieces-column red-pieces-column-${a}'></div>`)
    for (let b = 2; b > 0; b--){
        const gamePiece = $('<div/>');
        gamePiece.addClass('red-startingPiece');
        gamePiece.addClass(`red-startingPiece-${a}-${b}`);
        $(`.red-pieces-column-${a}`).append(gamePiece);
        $('.red-startingPiece-1-2').addClass('general');
        $('.red-startingPiece-1-1').addClass('marshal');
        $('.red-startingPiece-2-2').addClass('spy');
        $('.red-startingPiece-2-1').addClass('flag');
        $(`.red-startingPiece-3-${b}`).addClass('colonel');
        $(`.red-startingPiece-4-${b}`).addClass('major');
        $('.red-startingPiece-5-2').addClass('major');
        $('.red-startingPiece-5-1').addClass('miner');
        $(`.red-startingPiece-6-${b}`).addClass('miner');
        $(`.red-startingPiece-7-${b}`).addClass('miner');
        $(`.red-startingPiece-8-${b}`).addClass('captain');
        $(`.red-startingPiece-9-${b}`).addClass('captain');
        $(`.red-startingPiece-10-${b}`).addClass('lieutenant');
        $(`.red-startingPiece-11-${b}`).addClass('lieutenant');
        $(`.red-startingPiece-12-${b}`).addClass('sergeant');
        $(`.red-startingPiece-13-${b}`).addClass('sergeant');
        $(`.red-startingPiece-14-${b}`).addClass('bomb');
        $(`.red-startingPiece-15-${b}`).addClass('bomb');
        $(`.red-startingPiece-16-${b}`).addClass('bomb');
        $(`.red-startingPiece-17-${b}`).addClass('scout');
        $(`.red-startingPiece-18-${b}`).addClass('scout');
        $(`.red-startingPiece-19-${b}`).addClass('scout');
        $(`.red-startingPiece-20-${b}`).addClass('scout')
    }
}

// SET PIECES FUNCTIONS

const setBlue = () => {
    console.log('Blue team, set your pieces')
$(".blue-startingPiece").draggable({
    revert: "invalid",
    snap: true,
    snapMode: "inner",
    snapTolerance: 30
});
  
$(".blue-side").droppable({
    accept: ".blue-startingPiece",
    tolerance: "fit",
    greedy: true,
    drop: function(event, ui){
        // disable the current square
        $(this).droppable("disable")
        // grab the X coordinate of the PIECE that was dropped onto the square
        let formerX = $(ui.draggable).attr('x');
        // grab the Y coordinate of the piece that was dropped
        let formerY = $(ui.draggable).attr('y');
        // loop over ALL the squares
        $('.square').toArray().forEach((square)=>{
            //inside this function, the square variable represents each individual square
            // we use the $(square) to access with jquery each individual square
            // check if that square's X and Y coordinates MATCH the pieces former coordinates
            if($(square).attr('x') == formerX && $(square).attr('y') == formerY){
                //if this individual square is the one the piece came from...
                $(square).droppable('enable')
                //re-activate the square it came from to make it droppable again
            }
        })
        //now, give the PIECE the new x and y coordinates of the square its being dropped onto
        $(ui.draggable).attr('x', $(this).attr('x'))
        $(ui.draggable).attr('y', $(this).attr('y'))
        }
    });
}

const setRed = () => {
    console.log('Red team, set your pieces')
$(".red-startingPiece").draggable({
    revert: "invalid",
    snap: true,
    snapMode: "inner",
    snapTolerance: 30
});

$(".red-side").droppable({
    accept: ".red-startingPiece", 
    tolerance: "fit",
    greedy: true,
    drop: function(event, ui){
        $(this).droppable("disable")
        let formerX = $(ui.draggable).attr('x');
        let formerY = $(ui.draggable).attr('y');
        $('.square').toArray().forEach((square)=>{
            if($(square).attr('x') == formerX && $(square).attr('y') == formerY){
                $(square).droppable('enable')
            }
        })
        $(ui.draggable).attr('x', $(this).attr('x'))
        $(ui.draggable).attr('y', $(this).attr('y'))
        }
    });
}

$(".blue-btn").on("click", setBlue);
$(".red-btn").on("click", setRed);

// once all of the pieces are set...
// START GAME FUNCTIONS

const startGame = () => {
    console.log('Both armies are set. Blue team, begin the game')
$(".pieces").draggable({
    revert: "invalid",
    snap: true,
    snapMode: "inner",
    snapTolerance: 30
});

 $(".square").droppable({
    accept: ".blue-startingPiece, .red-startingPiece",
    tolerance: "fit",
    greedy: true,
    drop: function(target, ui){
        $(this).droppable("disable")
        let formerX = $(ui.draggable).attr('x');
        let formerY = $(ui.draggable).attr('y');
        $('.square').toArray().forEach((square)=>{
            if($(square).attr('x') == formerX && $(square).attr('y') == formerY){
                $(square).droppable('enable')
            }
        })
        $(ui.draggable).attr('x', $(this).attr('x'))
        $(ui.draggable).attr('y', $(this).attr('y'))
        console.log(target);
        console.log($(ui.draggable));
        }
    });
}

// ATTACK FUNCTIONS
// const blueAttack = () => {
// $(".blue-startingPiece").draggable({
//         revert: "invalid",
//         snap: true,
//         snapMode: "inner",
//         snapTolerance: 30
// });

// $(".red-startingPiece").droppable({
//     accept: ".blue-startingPiece",
//     tolerance: "fit",
//     greedy: true,
//     drop: function(target, ui){
//         let attacker = $(ui.draggable).attr
//             console.log(target)
//             // compare ranks of pieces
//             // .remove lower rank
//             // switch droppable back on square left
//             // append captured piece to where ever I want to put it
//     }
// })
// }

// Attack function built into droppable, accepts opposite color's pieces
// Switch draggable and droppable at end of each attack

$(".btn-primary").on("click", startGame);

// Move if checks 
    // if player moves to a space with piece on same team already there, not allowed, choose another move
    // if player moves to a space in a lake, not allowed, choose another move
    // if player tries to move diagonally, move not allowed, choose another move
    // if player (besides scout) tries to move more than once space, not allowed, choose another move
    // if player tries to move bomb, not allowed, choose another move
    // if player tries to move flag, not allowed, choose another move
    
// Attack if checks
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