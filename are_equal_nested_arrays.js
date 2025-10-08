// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([1, [22] 3], [1, [22], 3]) => true
// do not modify input parameters
function areValuesEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let iterator = 0; iterator < array1.length; iterator++) {
    if (typeof array1[iterator] === "object" && typeof array2[iterator] === "object") {
      if (!areValuesEqual(array1[iterator], array2[iterator])) {
        return false;
      }
    }
    else if (array1[iterator] !== array2[iterator]) {
      return false;
    }
  }
  return true;
}

function testAreEqual(type, array1, array2, expected) {
  const result = areValuesEqual(array1, array2);
  composeMessage(type, result, expected, array1, array2);
}

function composeMessage(type, result, expected, array1, array2) {
  if (result !== expected) {
    console.log('❌', type, '\n    input |', array1, array2);
    console.log('   output |', result);
    console.log(' expected |', expected);
    return;
  }
  console.log('✅', type, '\n');
}

function testAll() {
  testAreEqual("test with equal arrays", [1, 2, 3, 4], [1, 2, 3, 4], true);
  testAreEqual("test with unequal arrays", [1, 2, 3], [1, 2, 3, 4], false); 
  testAreEqual("test array of equal values", [1, 2, 3], [1, 3, 2], false);
  testAreEqual("test with nested array", [1, [22], 3], [1, [22], 3], true);
  testAreEqual("multiple nested arrays", [1, [22], [6, 7, 8]], [1, [22], [6, 7, 8]], true);
}

testAll();
