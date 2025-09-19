let counter = 0;
let factorial = 1;
const factorialCandidate = 6;

while(counter <= factorialCandidate){
  if(counter!== 0) {
    factorial = factorial * counter;
  }
  counter++;
}

console.log(factorialCandidate,"factorial is", factorial);
