function encode(data) {
  if (typeof data === 'number') {
    return 'i' + data + 'e';
  }
  if (typeof data === 'string') {
    return data.length + ':' + data;
  }
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

function testEncodeInteger() {
  testEncode("test with integers type", 123, "i123e");
  testEncode("test with negative value", -45, "i-45e");
  testEncode("test with zero", 0, "i0e");
}

function testEncodeString() {
  testEncode("test with normal string", "hello", "5:hello");
  testEncode("test with empty string", "", "0:");
  testEncode("string of special chars", "spec!@l ch@rs", "13:spec!@l ch@rs");
}

function main() {
  testEncodeInteger();
  testEncodeString();
}

main();
