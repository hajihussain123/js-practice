function areObjects(element1, element2) {
  return typeof element1 === "object" && typeof element2 === "object";
}

function areObjectsEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (areObjects(array1[index], array2[index])) {
      return areObjectsEqual(array1[index], array2[index]);
    }
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
}

function areDeepEqual(array1, array2) {
  if (!areObjects(array1, array2)) {
    return array1 === array2;
  }
  return areObjectsEqual(array1, array2);
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

function decodeList(cipher) {
  const realElements = [];
  let index = 0;
  while (index < cipher.length && cipher[index] !== 'e') {
    if (cipher[index] === 'i' && index < cipher.length) {
      realElements.push(+cipher.slice(index + 1, cipher.indexOf('e')));
      index += cipher.indexOf('e') + 1;
    } else if (cipher[index] === 'l' && index < cipher.length) {
      realElements.push(decodeList(cipher.slice(index + 1)));
      index += (realElements[realElements.length - 1].pop()) + 1;
      index += cipher[index] === 'e' ? 1 : 0;
    } else if (cipher[index] !== 'e' && typeof (+cipher[index]) === 'number' && index < cipher.length) {
      const indexOfSeparator = cipher.indexOf(':');
      const length = +cipher.slice(index, indexOfSeparator);
      realElements.push(cipher.slice(indexOfSeparator + 1, length + 1 + indexOfSeparator));
      index += length + 1 + indexOfSeparator;
    }
  }
  realElements.push(index);
  return realElements;
}

function decodeBencode(bencodeCipher) {
  if (bencodeCipher[0] === 'i') {
    return +bencodeCipher.slice(1, bencodeCipher.length - 1);
  }
  if (bencodeCipher[0] === 'l') {
    return decodeList(bencodeCipher.slice(1, bencodeCipher.length));
  }
  if (typeof (+bencodeCipher[0]) === 'number') {
    const indexOfSeparator = bencodeCipher.indexOf(':');
    return bencodeCipher.slice(indexOfSeparator + 1);
  }
}

function decode(bencodeCipher) {
  const decodedCode = decodeBencode(bencodeCipher);
  if (Array.isArray(decodedCode)) {
    decodedCode.pop();
  }
  return decodedCode;
}

function testDecode(type, bencodeCipher, expected) {
  const result = decode(bencodeCipher);
  composeMessage(type, bencodeCipher, expected, result);
}

function composeMessage(type, data, expected, result) {
  if (!areDeepEqual(expected, result)) {
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
  testDecode("nested array", "l3:oneli45el5:threeei5eee", ["one", [45, ["three"], 5]]);
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
