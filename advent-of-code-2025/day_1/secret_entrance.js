const parseInput = (input) => {
  return input.split("\n");
};

const rotateRight = (dial, steps) => {
  let countOfZeroes = 0;
  for (let counter = 1; counter <= steps; counter++) {
    countOfZeroes += dial.heading === 0 ? 1 : 0;
    dial.heading = (dial.heading + 1) % 100;
  }
  return countOfZeroes;
};

const rotateLeft = (dial, steps) => {
  let countOfZeroes = 0;
  for (let counter = 1; counter <= steps; counter++) {
    countOfZeroes += dial.heading === 0 ? 1 : 0;
    dial.heading = dial.heading - 1 < 0 ? 99 : dial.heading - 1;
  }
  return countOfZeroes;
};

const rotations = {
  "R": rotateRight,
  "L": rotateLeft,
};

const execute = (dial, instruction) => {
  const countOfZeroes = rotations[instruction[0]](dial, +instruction.slice(1)); // instruction ex:- "R56"
  return [countOfZeroes, dial.heading];
};

const rotate = (dial, instructions) => {
  const headings = instructions.map((command) => execute(dial, command));
  return headings;
};

const part1 = (dial, input) => {
  const header = { ...dial };
  const instructions = parseInput(input);
  const headings = rotate(header, instructions);
  return headings.filter((value) => value[1] === 0).length;
};

const part2 = (dial, input) => {
  const header = { ...dial };
  const instructions = parseInput(input);
  const headings = rotate(header, instructions);
  return headings.reduce((count, value) => value[0] + count, 0);
};

const dial = { heading: 50 };
const puzzleInput = Deno.readTextFileSync("./day_1_input.txt");
console.log(part1(dial, puzzleInput));
console.log(part2(dial, puzzleInput));
