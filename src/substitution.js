// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!input || !alphabet || alphabet.length != 26) {
      return false};
    if (Array.from(new Set(alphabet)).length !== 26){
      return false};
    
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split('');
    input = input.toLowerCase();
    let final = {};
    let decode = {};
    let result = "";

    alpha.split('').forEach((letter, index) => {
      final[letter] = alphabet[index];
      decode[alphabet[index]] = letter;
    })

    if (!encode) final = decode;
    input.split('').forEach(input => {
      result += input === " " ? " " : final[input]
    })
    return result;
  }
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
