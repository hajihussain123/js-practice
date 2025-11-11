const ROMAN_VALUES = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
};

const romanToNumber = (romanNumber) => {
  let numeralValue = 0;
  for (let iterator = 0; iterator < romanNumber.length - 1; iterator++) {
    if (
      ROMAN_VALUES[romanNumber[iterator]] >=
        ROMAN_VALUES[romanNumber[iterator + 1]]
    ) {
      numeralValue += ROMAN_VALUES[romanNumber[iterator]];
    } else {
      numeralValue -= ROMAN_VALUES[romanNumber[iterator]];
    }
  }
  numeralValue += ROMAN_VALUES[romanNumber[iterator]];
  return numeralValue;
};

function testRomanToNumber(type, romanNumber, expected) {
  const result = romanToNumber(romanNumber);
  composeMessage(type, result, expected, romanNumber);
}

function composeMessage(type, result, expected, romanNumber) {
  if (result !== expected) {
    console.log("❌", type, "\n    input |", romanNumber);
    console.log("   output |", result);
    console.log(" expected |", expected);
    return;
  }
  console.log("✅", type, "\n");
}

function testAll() {
  testRomanToNumber("normal single roman number", "III", 3);
  testRomanToNumber("multiple values of roman number", "IV", 4);
  testRomanToNumber("multiple values of roman number", "IX", 9);
  testRomanToNumber("multiple values of roman number", "X", 10);
}

testAll();
