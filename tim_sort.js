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
    const run = integers.slice(start, index + 1);
    if (predicate === isGreater) run.reverse();
    runs.push(run);
    index++;
  }
  if (index < integers.length) {
    runs.push(integers.slice(index));
  }
  return runs;
};

const merge = (array1, array2) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    array1[i] < array2[j] ? result.push(array1[i]) && ++i : result.push(array2[j]) && ++j;
  }
  while (i < array1.length) {
    result.push(array1[i]);
    ++i;
  }
  while (j < array2.length) {
    result.push(array2[j]);
    ++j;
  }
  return result;
};

const integers = [5, 7, 9, 4, 18, 3, 8, 10, 12, 6];
console.log('runs', findRuns(integers));
console.log('sorted array', findRuns(integers).reduce(merge, []));
