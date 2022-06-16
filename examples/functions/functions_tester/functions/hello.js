function greet(word) {
  return "hello " + word;
}

function greetWithPunctuation(word, punctuation) {
  return greet(word) + punctuation;
}

exports = greetWithPunctuation;

if (typeof module !== "undefined") {
  module.exports = { greet, greetWithPunctuation };
}
