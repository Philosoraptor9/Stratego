
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
        $('.blue-startingPiece-1-2').attr("rank", ranks.general);
        $('.blue-startingPiece-1-1').addClass('marshal');
        $('.blue-startingPiece-1-1').attr("rank", ranks.marshal);
        $('.blue-startingPiece-2-2').addClass('spy');
        $('.blue-startingPiece-2-2').attr("rank", ranks.spy);
        $('.blue-startingPiece-2-1').addClass('flag');
        $('.blue-startingPiece-2-1').attr("rank", ranks.flag);
        $(`.blue-startingPiece-3-${j}`).addClass('colonel');
        $(`.blue-startingPiece-3-${j}`).attr("rank", ranks.colonel);
        $(`.blue-startingPiece-4-${j}`).addClass('major');
        $(`.blue-startingPiece-4-${j}`).attr("rank", ranks.major);
        $('.blue-startingPiece-5-2').addClass('major');
        $('.blue-startingPiece-5-2').attr("rank", ranks.major);
        $('.blue-startingPiece-5-1').addClass('miner');
        $('.blue-startingPiece-5-1').attr("rank", ranks.miner);
        $(`.blue-startingPiece-6-${j}`).addClass('miner');
        $(`.blue-startingPiece-6-${j}`).attr("rank", ranks.miner);
        $(`.blue-startingPiece-7-${j}`).addClass('miner');
        $(`.blue-startingPiece-7-${j}`).attr("rank", ranks.miner);
        $(`.blue-startingPiece-8-${j}`).addClass('captain');
        $(`.blue-startingPiece-8-${j}`).attr("rank", ranks.captain);
        $(`.blue-startingPiece-9-${j}`).addClass('captain');
        $(`.blue-startingPiece-9-${j}`).attr("rank", ranks.captain);
        $(`.blue-startingPiece-10-${j}`).addClass('lieutenant');
        $(`.blue-startingPiece-10-${j}`).attr("rank", ranks.lieutenant);
        $(`.blue-startingPiece-11-${j}`).addClass('lieutenant');
        $(`.blue-startingPiece-11-${j}`).attr("rank", ranks.lieutenant);
        $(`.blue-startingPiece-12-${j}`).addClass('sergeant');
        $(`.blue-startingPiece-12-${j}`).attr("rank", ranks.seargent);
        $(`.blue-startingPiece-13-${j}`).addClass('sergeant');
        $(`.blue-startingPiece-13-${j}`).attr("rank", ranks.seargent);
        $(`.blue-startingPiece-14-${j}`).addClass('bomb');
        $(`.blue-startingPiece-14-${j}`).attr("rank", ranks.bomb);
        $(`.blue-startingPiece-15-${j}`).addClass('bomb');
        $(`.blue-startingPiece-15-${j}`).attr("rank", ranks.bomb);
        $(`.blue-startingPiece-16-${j}`).addClass('bomb');
        $(`.blue-startingPiece-16-${j}`).attr("rank", ranks.bomb);
        $(`.blue-startingPiece-17-${j}`).addClass('scout');
        $(`.blue-startingPiece-17-${j}`).attr("rank", ranks.scout);
        $(`.blue-startingPiece-18-${j}`).addClass('scout');
        $(`.blue-startingPiece-18-${j}`).attr("rank", ranks.scout);
        $(`.blue-startingPiece-19-${j}`).addClass('scout');
        $(`.blue-startingPiece-19-${j}`).attr("rank", ranks.scout);
        $(`.blue-startingPiece-20-${j}`).addClass('scout');
        $(`.blue-startingPiece-20-${j}`).attr("rank", ranks.scout);
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
        $('.red-startingPiece-1-2').attr("rank", ranks.general);
        $('.red-startingPiece-1-1').addClass('marshal');
        $('.red-startingPiece-1-1').attr("rank", ranks.marshal);
        $('.red-startingPiece-2-2').addClass('spy');
        $('.red-startingPiece-2-2').attr("rank", ranks.spy);
        $('.red-startingPiece-2-1').addClass('flag');
        $('.red-startingPiece-2-1').attr("rank", ranks.flag);
        $(`.red-startingPiece-3-${b}`).addClass('colonel');
        $(`.red-startingPiece-3-${b}`).attr("rank", ranks.colonel);
        $(`.red-startingPiece-4-${b}`).addClass('major');
        $(`.red-startingPiece-4-${b}`).attr("rank", ranks.major);
        $('.red-startingPiece-5-2').addClass('major');
        $('.red-startingPiece-5-2').attr("rank", ranks.major);
        $('.red-startingPiece-5-1').addClass('miner');
        $('.red-startingPiece-5-1').attr("rank", ranks.miner);
        $(`.red-startingPiece-6-${b}`).addClass('miner');
        $(`.red-startingPiece-6-${b}`).attr("rank", ranks.miner);
        $(`.red-startingPiece-7-${b}`).addClass('miner');
        $(`.red-startingPiece-7-${b}`).attr("rank", ranks.miner);
        $(`.red-startingPiece-8-${b}`).addClass('captain');
        $(`.red-startingPiece-8-${b}`).attr("rank", ranks.captain);
        $(`.red-startingPiece-9-${b}`).addClass('captain');
        $(`.red-startingPiece-9-${b}`).attr("rank", ranks.captain);
        $(`.red-startingPiece-10-${b}`).addClass('lieutenant');
        $(`.red-startingPiece-10-${b}`).attr("rank", ranks.lieutenant);
        $(`.red-startingPiece-11-${b}`).addClass('lieutenant');
        $(`.red-startingPiece-11-${b}`).attr("rank", ranks.lieutenant);
        $(`.red-startingPiece-12-${b}`).addClass('sergeant');
        $(`.red-startingPiece-12-${b}`).attr("rank", ranks.seargent);
        $(`.red-startingPiece-13-${b}`).addClass('sergeant');
        $(`.red-startingPiece-13-${b}`).attr("rank", ranks.seargent);
        $(`.red-startingPiece-14-${b}`).addClass('bomb');
        $(`.red-startingPiece-14-${b}`).attr("rank", ranks.bomb);
        $(`.red-startingPiece-15-${b}`).addClass('bomb');
        $(`.red-startingPiece-15-${b}`).attr("rank", ranks.bomb);
        $(`.red-startingPiece-16-${b}`).addClass('bomb');
        $(`.red-startingPiece-16-${b}`).attr("rank", ranks.bomb);
        $(`.red-startingPiece-17-${b}`).addClass('scout');
        $(`.red-startingPiece-17-${b}`).attr("rank", ranks.scout);
        $(`.red-startingPiece-18-${b}`).addClass('scout');
        $(`.red-startingPiece-18-${b}`).attr("rank", ranks.scout);
        $(`.red-startingPiece-19-${b}`).addClass('scout');
        $(`.red-startingPiece-19-${b}`).attr("rank", ranks.scout);
        $(`.red-startingPiece-20-${b}`).addClass('scout')
        $(`.red-startingPiece-20-${b}`).attr("rank", ranks.scout);
    }
}

// GAMEPLAY PRECURSORS

const dropCheck = (piece) => {
    let formerX = $(piece).attr('x');
    let formerY = $(piece).attr('y');
    $('.square').toArray().forEach((square) => {
        if($(square).attr('x') == formerX && $(square).attr('y') == formerY){
            $(square).droppable('enable')
            console.log($(square))
        }
    })
    $(piece).attr('x', $(this).attr('x'))
    $(piece).attr('y', $(this).attr('y'))
}

const moveNoAttack = () => {
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
    drop: (event, ui) => {
        dropCheck(ui.draggable)
        }
    });
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
    drop: (event, ui) => {
        dropCheck(ui.draggable)
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
    drop: (event, ui) => {
        dropCheck(ui.draggable)
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
moveNoAttack();
}

$(".btn-primary").on("click", startGame);

// ATTACK FUNCTIONS
// if square is not occupied, call moveNoAttack
// if square is occupied (ui-droppable-disabled) by an opposing piece, call [color]Attack
// if square is occupied by a piece of same color, revert

const blueAttack = () => {    
console.log("Blue is attacking!")
$(".blue-startingPiece").draggable({
    revert: "invalid",
    snap: true,
    snapMode: "inner",
    snapTolerance: 30
});

$(".red-startingPiece").droppable({
    accept: ".blue-startingPiece",
    tolerance: "fit",
    greedy: true,
    drop: function(event, ui){
        let attacker = $(ui.draggable);
        let defender = $(this);
        if (parseInt(attacker.attr("rank")) > parseInt(defender.attr("rank"))) {
            $(this).remove();
            dropCheck(ui.draggable);
        } else if (parseInt(attacker.attr("rank")) === parseInt(defender.attr("rank"))) {
            $(this).remove();
            $(ui.draggable).remove();
            dropCheck();
        } else {
            $(ui.draggable).remove();
            dropCheck(defender);
        } 
           console.log(event.target);    
           console.log(attacker.attr("rank"));
           console.log($(this).attr('rank'));  
        }
    }); 
}

$(".blue-attack-btn").on("click", blueAttack);

const redAttack = () => {
console.log("Red is attacking!")
$(".red-startingPiece").draggable({
        revert: "invalid",
        snap: true,
        snapMode: "inner",
        snapTolerance: 30
});

$(".blue-startingPiece").droppable({
    accept: ".red-startingPiece",
    tolerance: "fit",
    greedy: true,
    drop: function(event, ui){
        let attacker = $(ui.draggable);
        let defender = $(this);
        if (parseInt(attacker.attr("rank")) > parseInt(defender.attr("rank"))) {
            $(this).remove();
            dropCheck(ui.draggable);
        } else if (parseInt(attacker.attr("rank")) === parseInt(defender.attr("rank"))) {
            $(this).remove();
            $(ui.draggable).remove();
            dropCheck();
        } else {
            $(ui.draggable).remove();
            dropCheck(defender);
        } 
           console.log(event.target);    
           console.log(attacker.attr("rank"));
           console.log($(this).attr('rank'));  
        }
    })
 }

$(".red-attack-btn").on("click", redAttack);

// MOVE FUNCTIONS

// FIRST check to see if ui-droppable-disabled
    // if square is not occupied by anything, call moveNoAttack
    // if square is occupied by opposing piece

// const blueMove = () =>{
// $(".blue-startingPiece").draggable({
//     revert: function(target, ui){
//         if (target.attr($(ui.droppable-disabled)) === true){ // get the piece residing at that x and y
//             blueAttack();
//         } else {
//             moveNoAttack();
//         }
//     },
//     snap: true,
//     snapMode: "inner",
//     snapTolerance: 30
// });
// }

// Move if checks 
    // if player moves to a space with piece on same team already there, not allowed, choose another move
    // if player moves to a space in a lake, not allowed, choose another move
    // if player tries to move diagonally, move not allowed, choose another move
    // if player (besides scout) tries to move more than once space, not allowed, choose another move
    // if player tries to move bomb, not allowed, choose another move
    // if player tries to move flag, not allowed, choose another move

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