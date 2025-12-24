import { distinct } from "@std/collections";

const ingredients = `3-5
10-14
12-18
16-20

1
5
8
11
17
32`;
const parseInput = (input) => {
  return input.split("\n\n").map((x) => x.split("\n"));
};

const isInRange = (value, start, end) => value <= end && value >= start;

const isInAnyRange = (ingredient, ranges) => {
  const domains = ranges.map((value) => value.split("-").map((x) => +x));
  return domains.some(([start, end]) => isInRange(+ingredient, start, end));
};

const countOfFreshIngredients = (input) => {
  const [ranges, ingredients] = parseInput(input);
  return ingredients.reduce(
    (count, ingredient) =>
      (isInAnyRange(ingredient, ranges) && ++count) || count,
    0,
  );
};

const countOf = (ranges) => {
  return ranges.map((x) => (x[1] - x[0]) + 1).reduce((a, b) => a + b);
};

const isIndependentRange = (firstRange, secondRange) => {
  return !isInRange(firstRange[1], secondRange[0], secondRange[1]) &&
    !isInRange(secondRange[0], firstRange[0], firstRange[1]) &&
    !isInRange(secondRange[1], firstRange[0], firstRange[1]);
};

const isOverlapping = (firstRange, secondRange) => {
  return isInRange(firstRange[1], secondRange[0], secondRange[1]) &&
    firstRange[1] <= secondRange[1];
};

const distinctOf = (ranges) => {
  const sortedRanges = ranges.toSorted((a, b) => a[0] - b[0]);
  const distinctRanges = [];
  let index = 0;
  for (index = 0; index < sortedRanges.length - 1; index++) {
    if (isIndependentRange(sortedRanges[index], sortedRanges[index + 1])) {
      distinctRanges.push(sortedRanges[index]);
    } else {
      if (isOverlapping(sortedRanges[index], sortedRanges[index + 1])) {
        distinctRanges.push([
          sortedRanges[index][0],
          sortedRanges[index + 1][1],
        ]);
        index++;
      } else {
        distinctRanges.push(sortedRanges[index]);
        index++;
      }
    }
  }
  if (index < sortedRanges.length) {
    distinctRanges.push(sortedRanges[index]);
  }
  return sortedRanges.length === distinctRanges.length
    ? distinctRanges
    : distinctOf(distinctRanges);
};

const countOfAllFreshIds = (input) => {
  const ranges = parseInput(input)[0].map((x) => x.split("-").map((x) => +x));
  const distinctRanges = distinctOf(ranges);
  return countOf(distinctRanges);
};

const puzzleInput = Deno.readTextFileSync("./day_5_input.txt");

console.log(countOfFreshIngredients(ingredients));
console.log(countOfFreshIngredients(puzzleInput));
console.log(countOfAllFreshIds(ingredients));
console.log(countOfAllFreshIds(puzzleInput));
