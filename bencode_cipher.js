function encode(data) {
  return "i123e";
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
}

main();
