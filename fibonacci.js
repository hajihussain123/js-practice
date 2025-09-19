const numberOfTerms = 8;
let firstTerm = 0;
let secondTerm = 1;

for(let counter = 1; counter <= numberOfTerms; counter++){
  console.log(firstTerm);
  const currentTerm = firstTerm + secondTerm;
  firstTerm = secondTerm;
  secondTerm = currentTerm;
}
