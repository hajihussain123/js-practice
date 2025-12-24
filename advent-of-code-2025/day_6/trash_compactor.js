const worksheet = 
`123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `

const parseInput = input => {
  return input.split('\n').map(x => x.split(' ').filter(y => y !== ''));
}

const sum = (values) => values.map(x => +x).reduce((a, b) => a + b);

const product = (values) => values.map(x => +x).reduce((a, b) => a * b, 1);

const mathsHomeworkAnswer = (input) => {
  const worksheet = parseInput(input);
  let total = 0;
  for (let index = 0; index < worksheet[0].length; index++) {
    const values = [];
    let innerIndex = 0;
    for (innerIndex = 0; innerIndex < worksheet.length - 1; innerIndex++) {
      values.push(worksheet[innerIndex][index]);
    }
    total += worksheet[innerIndex][index] === '*' ? product(values) : sum(values);
  }
  return total;
}

const valuesOf = (worksheet) => {
  const values = [];
  let numbers = [];
  for (let index = worksheet[0].length - 1; index >= 0; index--) {
    let number = '';
    for (let innerIndex = 0; innerIndex < worksheet.length - 1; innerIndex++) {
      number += worksheet[innerIndex][index];
    }
    if (number.trim() !== '') numbers.push(number);
    else {
      values.push(numbers);
      numbers = [];
    }
  }
  values.push(numbers);
  return values;
}

const part2 = input => {
  const worksheet = input.split('\n');
  const values = valuesOf(worksheet);
  let total = 0;
  const operators = worksheet[worksheet.length - 1].split(' ').filter(x => x !== '').reverse();
  for (let index = 0; index < operators.length; index++) {
    total += operators[index] === '*' ? product(values[index]) : sum(values[index]);;
  }
  return total;
}

const puzzleInput = Deno.readTextFileSync('./day_6_input.txt')

console.log(mathsHomeworkAnswer(worksheet));
console.log(mathsHomeworkAnswer(puzzleInput));

console.log(part2(worksheet));
console.log(part2(puzzleInput));
