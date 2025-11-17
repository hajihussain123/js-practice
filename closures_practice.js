let i = 0;
const makeCounter = function () {
  return function () {
    return ++i;
  };
};

const makeAdder = (x) => (y) => x + y;
const [a, b, c] = [4, 3, 2].map(makeAdder);
const interesting = (f, x) => f(x);
console.log([7, 3, 9].map(makeAdder).map(interesting));
console.log(a, b, c);
const c1 = makeCounter();
console.log(c1());
console.log(c1());
console.log(c1());
const c2 = makeCounter();
console.log(c2());
console.log(c2());
console.log(c1());

const cycleMaker = (array) => {
  let i = 0;
  return () => {
    return array[i++ % array.length];
  };
};

const cycleColor = cycleMaker(["red", "green", "pink", "orange"]);
const cyclePeople = cycleMaker([
  "haji",
  "umarendra",
  "nigil",
  "ghasim",
  "basha bhaai",
]);

[1, 2, 7, 3, 0].filter((x) => x && x - 1).map((x, i, arr) =>
  cyclePeople(arr, x)
);

const juxt = (f1, f2) => (x) => f1(f2(x));
const itself = juxt((x) => Math.pow(x, 2), Math.sqrt);
