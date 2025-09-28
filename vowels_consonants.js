function isVowel(character) {
  const isAVowel = character === "a" || character === "e" || character === "i";
  return isAVowel || character === "o" || character === "u";
}

function areDifferent(firstCharacter, secondCharacter) {
  if (firstCharacter === ",") {
    return true;
  }
  return isVowel(firstCharacter) !== isVowel(secondCharacter);
}

function splitWords(string) {
  if (string.length === 0) {
    return "";
  }
  let word = "";
  let remainingString = string;

  while (remainingString.length !== 0) {
    const copyOfString = remainingString;
    word += copyOfString[0];
    remainingString = "";
    for (let index = 1; index < copyOfString.length; index++) {
      if (areDifferent(word[word.length - 1], copyOfString[index])) {
        word += copyOfString[index];
      } else {
        remainingString += copyOfString[index];
      }
    }
    if (remainingString.length !== 0) {
      word += ",";
    }
  }

  return word;
}

function testSplitWords(string, expected) {
  const words = splitWords(string);
  const symbol = words === expected ? "✅" : "❌";
  message(symbol, words, expected);
}

function message(symbol, words, expected) {
  console.log(symbol, "the words should be", expected, "and was", words);
}

function testAll() {
  testSplitWords("apple", "ape,p,l");
  testSplitWords("there", "tere,h");
  testSplitWords("hello", "helo,l");
  testSplitWords("abyss", "ab,y,s,s");
  testSplitWords("this", "tis,h");
  testSplitWords("aaabbb", "ab,ab,ab");
  testSplitWords("aaabbbaaa", "aba,aba,aba");
}

testAll();
