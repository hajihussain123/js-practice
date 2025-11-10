const isGreater = (val1, val2) => val1 > val2;
const isLesser = (val1, val2) => val1 < val2;

const findRuns = integers => {
  const runs = [];
  let index = 0;
  while (index < integers.length - 1) {
    const start = index;
    const predicate = integers[index] < integers[index + 1] ? isLesser : isGreater;
    while (index < integers.length - 1 && predicate(integers[index], integers[index + 1])) {
      index++;
    }
    runs.push(integers.slice(start, index + 1));
    index++;
  }
  if (index < integers.length) {
    runs.push(integers.slice(index));
  }
  return runs;
};

const integers = [5, 7, 9, 4, 2, 3, 8, 10, 12, 6];
console.log('runs', findRuns(integers));
