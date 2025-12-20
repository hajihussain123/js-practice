const paperRolls = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

const isValid = (row, column, paperRolls) => {
  return row >= 0 && row < paperRolls.length && column >= 0 &&
    column < paperRolls[0].length;
};

const isAccessible = (paperRolls, row, col) => {
  if (paperRolls[row][col] !== "@") {
    return false;
  }
  const rowPositions = [row - 1, row + 1, row];
  const colPositions = [col - 1, col + 1, col];
  const result = rowPositions
    .map((rowIndex) => colPositions
      .map((colIndex) =>
      (isValid(rowIndex, colIndex, paperRolls) &&
          paperRolls[rowIndex][colIndex] === "@" && 1) || 0)
      .reduce((a, b) => a + b))
    .reduce((a, b) => a + b);
  return result < 5;
};

const parseInput = (input) => input.split("\n").map((x) => x.split(""));

const countPaperRollsPart1 = (input) => {
  const paperRolls = parseInput(input);
  return paperRolls.reduce(
    (total, row, rowIndex) =>
      total +
      (row.reduce((count, element, colIndex) =>
        (isAccessible(paperRolls, rowIndex, colIndex) && ++count) || count, 0)),
    0,
  );
};

const countPaperRollsPart2 = (input) => {
  const paperRolls = parseInput(input);
  let total = paperRolls.reduce(
    (total, row, i) =>
      total +
      (row.reduce((count, element, j) =>
        (isAccessible(paperRolls, i, j) && (paperRolls[i][j] = ".") &&
          ++count) || count, 0)),
    0,
  );
  let count = 0;
  do {
    count = paperRolls.reduce(
      (total, row, i) =>
        total +
        (row.reduce((count, element, j) =>
          (isAccessible(paperRolls, i, j) && (paperRolls[i][j] = ".") &&
            ++count) || count, 0)),
      0,
    );
    total += count;
  } while (count !== 0);
  return total;
};

const puzzleInput = Deno.readTextFileSync("./day_4_input.txt");
console.log(countPaperRollsPart1(paperRolls));
console.log(countPaperRollsPart2(paperRolls));
console.log(countPaperRollsPart1(puzzleInput));
console.log(countPaperRollsPart2(puzzleInput));
