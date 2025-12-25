const tachyonManifold = `.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............`;

const parseInput = (input) => input.split("\n");

const traverseBeams = (space, rowIndex, colIndex, path) => {
  let row = rowIndex;
  while (row < space.length && space[row][colIndex] !== "^") {
    row++;
  }
  if (row >= space.length) return 0;
  const key = row.toString() + colIndex.toString();
  if (key in path) return 0;
  else path[key] = 1;
  return 1 + traverseBeams(space, row + 1, colIndex - 1, path) +
    traverseBeams(space, row + 1, colIndex + 1, path);
};

const part2 = (space, rowIndex, colIndex, path) => {
  if ((rowIndex.toString()+','+colIndex.toString()) in path) {
    return path[(rowIndex.toString()+','+colIndex.toString())];
  }
  let row = rowIndex;
  while (row < space.length && space[row][colIndex] !== "^") {
    row++;
  }
  if (row >= space.length) {
    path[(rowIndex.toString()+','+colIndex.toString())] = 1;
    return 1;
  }
  const count = part2(space, row + 1, colIndex - 1, path) +
    part2(space, row + 1, colIndex + 1, path);
  path[(rowIndex.toString()+','+colIndex.toString())] = count;
  return count;
};

const countOfSplittedBeams = (input) => {
  const space = parseInput(input);
  const startingIndex = space[0].indexOf("S");
  return traverseBeams(space, 1, startingIndex, {});
};

const countOfSplittedBeamsPart2 = (input) => {
  const space = parseInput(input);
  const startingIndex = space[0].indexOf("S");
  return part2(space, 1, startingIndex, {});
};

const puzzleInput = Deno.readTextFileSync("./day_7_input.txt");

console.log(countOfSplittedBeams(tachyonManifold));
console.log(countOfSplittedBeams(puzzleInput));
console.log(countOfSplittedBeamsPart2(tachyonManifold));
console.log(countOfSplittedBeamsPart2(puzzleInput));
