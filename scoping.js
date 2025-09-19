let j = 10;
console.log("outer j=",j);
if(true){
  let j = 100;
  console.log("->inner if block's j=",j);
  if(true){
    let j = 98;
    console.log(" -->inner inner if block's j=",j);
    j++;
  }
  j++;
  console.log("->inner if block's j=",j);
}
if(true){
  j++;
}
console.log("outer j=",j);
