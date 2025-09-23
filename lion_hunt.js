const lionZebraLocation = "Z L ZL Z L";
const lion = "L";
const zebra = "Z";
let distanceOfPath = -1;

let counter = 0;
let minimumDistance = -1;

let counterForward;
for(counter = 0; counter < lionZebraLocation.length - 1; counter++){

  if(lionZebraLocation[counter] === lion){

    counterForward = counter + 1;
    while(counterForward < lionZebraLocation.length && lionZebraLocation[counterForward] !== zebra){
      counterForward++;
    }

    if(counterForward !== lionZebraLocation.length){
      counterForward = counterForward - counter - 1;
  
      if(minimumDistance === -1){
        minimumDistance = counterForward;
      } else{
        minimumDistance = minimumDistance > counterForward ? counterForward : minimumDistance; 
      }
    }

  }
}


let counterBackward;
for(counter = lionZebraLocation.length - 1; counter > 0; counter--){

  if(lionZebraLocation[counter] === lion){

    counterBackward = counter - 1;
    while(counterBackward >= 0 && lionZebraLocation[counterBackward] !== zebra){
      counterBackward--;
    }

    if(counterBackward !== -1){
      counterBackward = counter - counterBackward - 1;
  
      if(minimumDistance === -1){
        minimumDistance = counterBackward;
      } else{
        minimumDistance = minimumDistance > counterBackward ? counterBackward : minimumDistance; 
      }
    }

  }
}

distanceOfPath = minimumDistance;

console.log("the shortest distance is",distanceOfPath);
