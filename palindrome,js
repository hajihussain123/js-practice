const palindromeCandidate = 898;

let numberToReverse = palindromeCandidate;
console.log(numberToReverse);

let reversedNumber = 0;
const resultMultiplier = 10;

while (numberToReverse > 0){

  const lastDigit = numberToReverse % 10;
  reversedNumber = reversedNumber * resultMultiplier + lastDigit;
  numberToReverse = (numberToReverse - lastDigit) / 10 ;

}

const isPalindrome = reversedNumber === palindromeCandidate ? "is a palindrome" : "is not a palindrome" ;

console.log(palindromeCandidate,isPalindrome);
