// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) { 
    if (!shift || shift < -25 || shift > 25 || shift === undefined)
      return false;

    if (encode === false)
      shift *= -1;
    
    const alpha = "abcdefghijklmnopqrstuvwxyz".split('');
    const inputArray = input.toLowerCase().split('');
    let results = '';

    for (let letter of inputArray){
      if (!letter.match(/[a-z]/)){
        results += letter; continue;
      }; 

    const index = alpha.indexOf(letter);
    let findIndex = index + shift;

    if (findIndex > 25) {findIndex -= 26};
    if (findIndex < 0) {findIndex += 26};
      results += alpha[findIndex];
  }  
  return results;
}

  return {
    caesar,
  }; 
})();

module.exports = { caesar: caesarModule.caesar };
