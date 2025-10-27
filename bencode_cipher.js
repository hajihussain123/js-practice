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

function isNumber(string) {
  return string.startsWith('i') && string.endsWith('e');
}

function decode(bencodeCipher) {
  if (isNumber(bencodeCipher)) {
    return +bencodeCipher.slice(1, bencodeCipher.length - 1);
  }
}

function testDecode(type, bencodeCipher, expected) {
  const result = decode(bencodeCipher);
  composeMessage(type, bencodeCipher, expected, result);
}

function composeMessage(type, data, expected, result) {
  if (result !== expected) {
    console.log("❌", type);
    console.log("input    |", data);
    console.log("output   |", result);
    console.log("expected |", expected, "\n");
    return;
  }
  console.log("✅", type, "\n");
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
  testEncode("test with empty list", [], "le");
  testEncode("test with nested list", [0, "", ["test"]], "li0e0:l4:testee");
  testEncode(
    "test with nested lists",
    ["one", ["two", ["three"]]],
    "l3:onel3:twol5:threeeee"
  );
}

function testDecodeInteger() {
  testDecode("test with normal integer", "i123e", 123);
}

function main() {
  console.log("\n testing all encodings\n", "_".repeat(21));
  testEncodeInteger();
  testEncodeString();
  testEncodeLists();
  console.log("\n testing all decodings\n", "_".repeat(21));
  testDecodeInteger();
}

main();
