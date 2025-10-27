let BOARD = [
  [
    '_', '_', '_', '1', '_', '_', '_',
    '_', '2', '_', '_', '_', '_', '3',
    '_', '_', '_', '_', '4', '_', '_',
    '_', '_', '5', '_', '_', '_', '_',
    '6', '_', '_', '_', '_', '7', '_',
    '_', '_', '_', '8', '_', '_'
  ],
  [
    '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|'
  ],
  [
    '|', ' ', '  ', ' ',
    '|', ' ', '🔴', ' ',
    '|', ' ', '  ', ' ',
    '|', ' ', '🔴', ' ',
    '|', ' ', '  ', ' ',
    '|', ' ', '🔴', ' ',
    '|', ' ', '  ', ' ',
    '|', ' ', '🔴', ' ',
    '|', ' ', ' ', '1'
  ],
  [
    '|', '_', '_', '_', '_', '|', '_',
    '_', '_', '_', '|', '_', '_', '_',
    '_', '|', '_', '_', '_', '_', '|',
    '_', '_', '_', '_', '|', '_', '_',
    '_', '_', '|', '_', '_', '_', '_',
    '|', '_', '_', '_', '_', '|'
  ],
  [
    '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|'
  ],
  [
    '|', ' ', '🔴', ' ',
    '|', ' ', '  ', ' ',
    '|', ' ', '🔴', ' ',
    '|', ' ', '  ', ' ',
    '|', ' ', '🔴', ' ',
    '|', ' ', '  ', ' ',
    '|', ' ', '🔴', ' ',
    '|', ' ', '  ', ' ',
    '|', ' ', ' ', '2'
  ],
  [
    '|', '_', '_', '_', '_', '|', '_',
    '_', '_', '_', '|', '_', '_', '_',
    '_', '|', '_', '_', '_', '_', '|',
    '_', '_', '_', '_', '|', '_', '_',
    '_', '_', '|', '_', '_', '_', '_',
    '|', '_', '_', '_', '_', '|'
  ],
  [
    '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|'
  ],
  [
    '|', ' ', '  ', ' ',
    '|', ' ', '🔴', ' ',
    '|', ' ', '  ', ' ',
    '|', ' ', '🔴', ' ',
    '|', ' ', '  ', ' ',
    '|', ' ', '🔴', ' ',
    '|', ' ', '  ', ' ',
    '|', ' ', '🔴', ' ',
    '|', ' ', ' ', '3'
  ],
  [
    '|', '_', '_', '_', '_', '|', '_',
    '_', '_', '_', '|', '_', '_', '_',
    '_', '|', '_', '_', '_', '_', '|',
    '_', '_', '_', '_', '|', '_', '_',
    '_', '_', '|', '_', '_', '_', '_',
    '|', '_', '_', '_', '_', '|'
  ],
  [
    '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|'
  ],
  [
    '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', ' ', '4'
  ],
  [
    '|', '_', '_', '_', '_', '|', '_',
    '_', '_', '_', '|', '_', '_', '_',
    '_', '|', '_', '_', '_', '_', '|',
    '_', '_', '_', '_', '|', '_', '_',
    '_', '_', '|', '_', '_', '_', '_',
    '|', '_', '_', '_', '_', '|'
  ],
  [
    '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|'
  ],
  [
    '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', ' ', '5'
  ],
  [
    '|', '_', '_', '_', '_', '|', '_',
    '_', '_', '_', '|', '_', '_', '_',
    '_', '|', '_', '_', '_', '_', '|',
    '_', '_', '_', '_', '|', '_', '_',
    '_', '_', '|', '_', '_', '_', '_',
    '|', '_', '_', '_', '_', '|'
  ],
  [
    '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|'
  ],
  [
    '|', ' ', '⚪', ' ', '|', ' ', '  ', ' ', '|', ' ', '⚪', ' ', '|', ' ', '  ', ' ', '|', ' ', '⚪', ' ', '|', ' ', '  ', ' ', '|', ' ', '⚪', ' ', '|', ' ', '  ', ' ', '|', ' ', ' ', '6'
  ],
  [
    '|', '_', '_', '_', '_', '|', '_',
    '_', '_', '_', '|', '_', '_', '_',
    '_', '|', '_', '_', '_', '_', '|',
    '_', '_', '_', '_', '|', '_', '_',
    '_', '_', '|', '_', '_', '_', '_',
    '|', '_', '_', '_', '_', '|'
  ],
  [
    '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|'
  ],
  [
    '|', ' ', '  ', ' ', '|', ' ', '⚪', ' ', '|', ' ', '  ', ' ', '|', ' ', '⚪', ' ', '|', ' ', '  ', ' ', '|', ' ', '⚪', ' ', '|', ' ', '  ', ' ', '|', ' ', '⚪', ' ', '|', ' ', ' ', '7'
  ],
  [
    '|', '_', '_', '_', '_', '|', '_',
    '_', '_', '_', '|', '_', '_', '_',
    '_', '|', '_', '_', '_', '_', '|',
    '_', '_', '_', '_', '|', '_', '_',
    '_', '_', '|', '_', '_', '_', '_',
    '|', '_', '_', '_', '_', '|'
  ],
  [
    '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|', ' ', '  ', ' ', '|'
  ],
  [
    '|', ' ', '⚪', ' ', '|', ' ', '  ', ' ', '|', ' ', '⚪', ' ', '|', ' ', '  ', ' ', '|', ' ', '⚪', ' ', '|', ' ', '  ', ' ', '|', ' ', '⚪', ' ', '|', ' ', '  ', ' ', '|', ' ', ' ', '8'
  ],
  [
    '|', '_', '_', '_', '_', '|', '_',
    '_', '_', '_', '|', '_', '_', '_',
    '_', '|', '_', '_', '_', '_', '|',
    '_', '_', '_', '_', '|', '_', '_',
    '_', '_', '|', '_', '_', '_', '_',
    '|', '_', '_', '_', '_', '|'
  ]
]

let board = "";
function copyToBoard() {
  board = "";
  for (let index = 0; index < BOARD.length; index++) {
    board += BOARD[index].join("");
    board += "\n";
  }
  return true;
}

function updateWildCards() {
  if (BOARD[2].includes("⚪")) {
    BOARD[2][BOARD[2].indexOf("⚪")] = "💮";
  }
  if (BOARD[23].includes("🔴")) {
    BOARD[23][BOARD[23].indexOf("🔴")] = "😡";
  }
  return true;
}

function moveTheCoin(rowIndex, colIndex, sign, playerDecider, playerColor) {
  if (BOARD[rowIndex + 3 * playerDecider][colIndex + 4 * sign] === "  ") {
    BOARD[rowIndex + 3 * playerDecider][colIndex + 4 * sign] = BOARD[rowIndex][colIndex];
    BOARD[rowIndex][colIndex] = "  ";
    return updateWildCards();
  } else if (BOARD[rowIndex + 6 * playerDecider][colIndex + 8 * sign] === "  ") {
    BOARD[rowIndex + 6 * playerDecider][colIndex + 8 * sign] = BOARD[rowIndex][colIndex];
    BOARD[rowIndex + 3 * playerDecider][colIndex + 4 * sign] = "  ";
    BOARD[rowIndex][colIndex] = "  ";
    const coin = playerColor === "red" ? "🔴" : "⚪";
    copyToBoard();
    console.clear();
    console.log(board);
    playerTurn(playerColor, coin);
    return updateWildCards();
  }
  return false;
}

function updateBoard(row, col, direction, playerColor) {
  const rowIndex = 2 + (row - 1) * 3;
  const colIndex = 2 + (col - 1) * 4;
  let playerDecider = playerColor === "red" ? 1 : -1;
  const playerCoinColor = playerColor === "red" ? ['🔴', '😡'] : ['⚪', '💮'];
  if (playerCoinColor.includes(BOARD[rowIndex][colIndex])) {
    if (['😡', '💮'].includes(BOARD[rowIndex][colIndex])) {
      const verticalDir = prompt("enter direction [up/ down] :");
      playerDecider = verticalDir === "up" ? -1 : 1;
    }
    if (direction === "l" && col - 1 > 0 && !playerCoinColor.includes(BOARD[rowIndex + 3 * playerDecider][colIndex - 4])) {
      return moveTheCoin(rowIndex, colIndex, -1, playerDecider, playerColor) ? copyToBoard() : false;
    }
    if (direction === "r" && col + 1 <= 8 && !playerCoinColor.includes(BOARD[rowIndex + 3 * playerDecider][colIndex + 4])) {
      return moveTheCoin(rowIndex, colIndex, 1, playerDecider, playerColor) ? copyToBoard() : false;
    }
  }
  return false;
}

function playerTurn(coinColor, coin) {
  while (true) {
    console.log("player ", coin, "  turn :");
    const coinPosition = (prompt("enter the coin[row, column]:")).split(",");
    const direction = prompt("enter the direction[r/ l]:");
    if (typeof coinPosition === 'object' && updateBoard(+coinPosition[0], +coinPosition[1], direction, coinColor)) break;
  }
  console.clear();
  console.log(board);
}

function areCoinsThere(coin) {
  for (let index = 0; index < BOARD.length; index++) {
    if (BOARD[index].includes(coin)) {
      return true;
    }
  }
  return false;
}

function noOneWon() {
  return areCoinsThere("⚪") && areCoinsThere("🔴");
}

function playCheckers() {
  copyToBoard();
  console.log(board);
  while (noOneWon()) {
    playerTurn("white", "⚪");
    if (areCoinsThere("🔴"))
      playerTurn("red", "🔴");
  }
  console.log("\n\n");
  if (areCoinsThere("⚪")) {
    console.log("player ⚪ won ".repeat(6));
  } else {
    onsole.log("player 🔴 won".repeat(6));
  }
  console.log("\n\n");
}

playCheckers();
