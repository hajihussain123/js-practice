const banksOfBatteries = `987654321111111
811111111111119
234234234234278
818181911112111`;

const largestNumber = (numbers, offset) => {
  const big = Math.max(...numbers);
  return [big, numbers.indexOf(big) + offset];
}

const isNotValid = (numbers) => {
  return numbers.every(x => x === -Infinity) || numbers.length === 0;
}

const nextIndex = (largeIndex, numbers, bank) => {
  if (!isNotValid(bank.slice(largeIndex + 1))) return largeIndex + 1;
  for (let index = numbers.length - 1; index >= 0; index--) {
    if (!isNotValid(bank.slice(numbers[index][1] + 1))) return numbers[index][1] + 1;
  }
  return 0;
}

const largestJoltage = (bank, count) => {
  const numbers = [];
  let index = 0;
  while (numbers.length < count) {
    const large = largestNumber(bank.slice(index), index); //987654321111111 // 234234234234278
    numbers.push(large);                          //[2,3,4,2,3,4,2,3,4,2,3,4,2,7,8]
    bank[large[1]] = -Infinity;
    index = nextIndex(large[1], numbers, bank);
  }
  return numbers.sort((a, b) => a[1] - b[1]).map(x => x[0]).join('');
};

const parseInput = (input) => input.split("\n").map(x => x.split('').map(x => +x));

const maximumJoltagePart1 = (input) => {
  const banks = parseInput(input);
  return banks.map((x) => +largestJoltage(x, 2)).reduce((a, b) => a + b, 0);
};

const maximumJoltagePart2 = (input) => {
  const banks = parseInput(input);
  return banks.map(x => +(largestJoltage(x, 12))).reduce((a, b) => a + b);
}

const input = Deno.readTextFileSync("./day_3_input.txt");

console.log(maximumJoltagePart1(input));

console.log(maximumJoltagePart2(input));
