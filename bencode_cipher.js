function encode(data) {
  if (typeof data === 'number')
  return 'i' + data + 'e';
}

function testEncode(type, data, expected) {
  const result = encode(data);
  composeMessage(type, data, expected, result);
}

function composeMessage(type, data, expected, result) {
  if (result !== expected) {
    console.log("❌", type);
    console.log("input    |", data);
    console.log("output   |", result);
    console.log("expected |", expected);
    return;
  }
  console.log("✅", type);
}

function main() {
  testEncode("test with integers type", 123, "i123e");
  testEncode("test with negative value", -45, "i-45e");
  testEncode("test with zero", 0, "i0e");
}

main();
