let numberOfIterations = 0;

function sort(data) {
  const sortedData = data.slice();
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      numberOfIterations++;
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }
  return sortedData;
}

function median(data) {
  const sortedData = sort(data);
  if (sortedData.length % 2) {
    return sortedData[(sortedData.length - 1) / 2];
  }
  return (sortedData[sortedData.length / 2] + sortedData[(sortedData.length - 2) / 2]) / 2;
}

function sumOf(data) {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum += data[index];
  }
  return sum;
}

function meanOf(data) {
  return sumOf(data) / data.length;
}

function standardDeviation(data) {
  const mean = meanOf(data);
  const squaredDeviations = [];
  for (let index = 0; index < data.length; index++) {
    squaredDeviations.push(Math.pow(data[index] - mean, 2));
  }
  return Math.sqrt(meanOf(squaredDeviations));
}

function randomData(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower));
 }

function benchmark(numberOfElements) {
  const data = [];
  for (let iterator = 0; iterator < numberOfElements; iterator++) {
    data.push(randomData(1, 100));
  }
  console.log("sorted data : ", sort(data));
  console.log("number of iterations : ", numberOfIterations);
  console.log("median : ", median(sort(data)));
  console.log("mean : ", meanOf(data));
  console.log("standard deviation : ", standardDeviation(data));
}

function readData(numberOfElements) {
  const data = [];
  for (let iterator = 0; iterator < numberOfElements; iterator++) {
    data.push(+prompt("movie "+ (iterator + 1) + ":"));
  }
  return data;
}

function moviesCollection(hero1, hero2) {
  console.log("\nMOVIES CONSISTENCY TEST\n________________");
  console.log("enter ", hero1 , "last 6 movies collection:");
  const hero1Collections = readData(6);
  console.log("enter ", hero2 , "last 6 movies collection:");
  const hero2Collections = readData(6);

  if (standardDeviation(hero1Collections) < standardDeviation(hero2Collections)) {
    console.log(hero1, "has more consistency");
  } else {
    console.log(hero2, "has more consistency");
  }
}

benchmark(6);

moviesCollection("\n\nbob", "bhAAi");
