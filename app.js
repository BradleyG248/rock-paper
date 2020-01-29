let posMoves = [
  {
    move: "rock",
    img: "rock.png"
  },
  {
    move: "paper",
    img: "paper.png"
  }
  , {
    move: "scissors",
    img: "scissors.png"
  }
]
let playerMove = null;
let botMove = null;
function enemyMove() {
  botMove = posMoves[Math.floor(Math.random() * posMoves.length)].move
}
function playerWin() {
  document.getElementById("win-or-lose").textContent = "You Win!"
}
function botWin() {
  document.getElementById("win-or-lose").textContent = "You Lose..."
}
function tie() {
  document.getElementById("win-or-lose").textContent = "Tie."
}
function playerRock() {
  enemyMove();
  if (botMove == "rock") {
    document.getElementById("bot-move-img").src = posMoves[0].img
    return tie();
  }
  if (botMove == "paper") {
    document.getElementById("bot-move-img").src = posMoves[1].img
    return botWin();
  }
  if (botMove == "scissors") {
    document.getElementById("bot-move-img").src = posMoves[2].img
    return playerWin();
  }
}
function playerScissors() {
  enemyMove();
  if (botMove == "rock") {
    document.getElementById("bot-move-img").src = posMoves[0].img
    return botWin();
  }
  if (botMove == "paper") {
    document.getElementById("bot-move-img").src = posMoves[1].img
    return playerWin();
  }
  if (botMove == "scissors") {
    document.getElementById("bot-move-img").src = posMoves[2].img
    return tie();
  }
}
function playerPaper() {
  enemyMove();
  if (botMove == "rock") {
    document.getElementById("bot-move-img").src = posMoves[0].img
    return playerWin();
  }
  if (botMove == "paper") {
    document.getElementById("bot-move-img").src = posMoves[1].img
    return tie();
  }
  if (botMove == "scissors") {
    document.getElementById("bot-move-img").src = posMoves[2].img
    return botWin();
  }
}
function fight() {
  if (playerMove == "rock") {
    playerRock();
  }
  if (playerMove == "paper") {
    playerPaper();
  }
  if (playerMove == "scissors") {
    playerScissors();
  }
}
function rock() {
  playerMove = posMoves[0].move
  document.getElementById("player-move-img").src = posMoves[0].img
  fight();
}
function paper() {
  playerMove = posMoves[1].move
  document.getElementById("player-move-img").src = posMoves[1].img
  fight();
}
function scissors() {
  playerMove = posMoves[2].move
  document.getElementById("player-move-img").src = posMoves[2].img
  fight();
}