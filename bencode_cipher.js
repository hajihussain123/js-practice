function encodeLists(data) {
  encodedData = '';
  for (let index = 0; index < data.length; index++) {
    encodedData += encode(data[index]);
  }
  return encodedData;
}

function encode(data) {
  if (typeof data === 'number') {
    return 'i' + data + 'e';
  }
  if (typeof data === 'string') {
    return data.length + ':' + data;
  }
  return 'l' + encodeLists(data) + 'e';
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

function testEncodeLists() {
  testEncode("test with normal list", ["apple", 123], "l5:applei123ee");
}

function main() {
  testEncodeInteger();
  testEncodeString();
  testEncodeLists();
}

main();
