function areValuesEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let iterator = 0; iterator < array1.length; iterator++) {
    const val1 = array1[iterator];
    const val2 = array2[iterator];
    if (typeof val1 === "object" && typeof val2 === "object") {
      if (!areValuesEqual(val1, val2)) {
        return false;
      }
    }
    else if (val1 !== val2) {
      return false;
    }
  }
  return true;
}

function encodeLists(data) {
  let encodedData = '';
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

function decodeInteger(elements, cipher) {
  const indexOfE = cipher.indexOf('e');
  const integer = +cipher.slice(1, indexOfE);
  elements.push(integer);
  return indexOfE + 1;
}

function decodeString(elements, cipher) {
  const length = +cipher.slice(0, cipher.indexOf(':'));
  const string = cipher.slice(cipher.indexOf(':') + 1, length + cipher.indexOf(':') + 1);
  elements.push(string);
  return length + cipher.indexOf(':') + 1;
}

function decode(bencode) {
  const realElements = [];
  let i = 0;
  while (i < bencode.length && bencode[i] !== 'e') {
    if (bencode[i] === 'i') {
      i += decodeInteger(realElements, bencode.slice(i));
    } else if (bencode[i] === 'l') {
      realElements.push(decode(bencode.slice(i + 1)));
      i += 1 + realElements[realElements.length - 1].pop();
    } else if (typeof +bencode[i] === 'number') {
      i += decodeString(realElements, bencode.slice(i));
    }
  }
  if (bencode[i] === 'e') {
    realElements.push(i + 1);
  } else {
    realElements.push(i);
  }
  return realElements;
}

function testDecode(type, bencodeCipher, expected) {
  const result = decode(bencodeCipher)[0];
  composeMessage(type, bencodeCipher, expected, result);
}

function composeMessage(type, data, expected, result) {
  if (!areValuesEqual(expected, result)) {
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
  testDecode("test with negative value", "i-45e", -45);
  testDecode("test with zero", "i0e", 0);
}

function testDecodeString() {
  testDecode("test with normal string", "5:hello", "hello");
  testDecode("test with empty string", "0:", "");
  testDecode("string of special chars", "13:spec!@l ch@rs", "spec!@l ch@rs");
}

function testDecodeList() {
  testDecode("empty list", "le", []);
  testDecode("inner array", "l3:onel3:twoee", ["one", ["two"]]);
  testDecode(
    "nested array",
    "l3:oneli45el5:threeei68ee2:hie",
    ["one", [45, ["three"], 68], "hi"]
  );
}

function main() {
  console.log("\n testing all encodings\n", "_".repeat(21));
  testEncodeInteger();
  testEncodeString();
  testEncodeLists();
  console.log("\n testing all decodings\n", "_".repeat(21));
  testDecodeInteger();
  testDecodeString();
  testDecodeList();
}

main();
