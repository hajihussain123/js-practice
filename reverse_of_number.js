let numberToReverse = 8468;
console.log(numberToReverse);

let reversedNumber = 0;
const resultMultiplier = 10;

while (numberToReverse > 0){
  const lastDigit = numberToReverse % 10;
  console.log(lastDigit);
  reversedNumber = reversedNumber * resultMultiplier + lastDigit;
  numberToReverse = (numberToReverse - lastDigit) / 10 ;
}

console.log("reversed number :",reversedNumber);
 
