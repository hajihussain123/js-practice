const lionZebraLocation = "LZ";
const lion = "L";
const zebra = "Z";
let distanceOfPath = -1;

let distanceCounter = 0;
let counter = 0;
if (lionZebraLocation[0] === lion){
  if(lionZebraLocation[1] !== zebra){
    counter++;
    distanceCounter++;
  }
}

distanceOfPath = distanceCounter;

console.log("the shortest distance is",distanceOfPath);
