import { chunk } from "jsr:@std/collections";

const areEqual = (chunks) => {
  for (let index = 0; index < chunks.length - 1; index++) {
    if (chunks[index] !== chunks[index + 1]) return false;
  }
  return true;
};

const isInvalid = (number, length) => {
  const sequence = number.toString();
  if (!length && sequence.length % 2) {
    return false;
  }
  length = length ? length : Math.floor(sequence.length / 2);
  const chunks = chunk(sequence, length).map((x) => x.join(""));
  return areEqual(chunks);
};

const isRepeating = (number) => {
  const sequence = number.toString();
  for (let counter = 1; counter <= Math.floor(sequence.length / 2); counter++) {
    if (isInvalid(number, counter)) return true;
  }
  return false;
};

const invalidIdsOf = (startId, endId, predicate) => {
  const invalidIds = [];
  for (let counter = startId; counter <= endId; counter++) {
    if (predicate(counter)) invalidIds.push(counter);
  }
  return invalidIds;
};

const parseInput = (input) => {
  return input.split(",").map((x) => x.split("-").map((x) => +x));
};

const part1 = (input) => {
  const productIds = parseInput(input);
  return productIds.flatMap(([start, end]) =>
    invalidIdsOf(start, end, isInvalid)
  ).reduce((a, b) => a + b, 0);
};

const part2 = (input) => {
  const productIds = parseInput(input);
  return productIds.flatMap(([start, end]) =>
    invalidIdsOf(start, end, isRepeating)
  ).reduce((a, b) => a + b, 0);
};

const puzzleInput = Deno.readTextFileSync("./day_2_input.txt");
console.log(part1(puzzleInput));
console.log(part2(puzzleInput));
