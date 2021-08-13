// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  let alpha = { 11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
                12: "f", 22: "g", 32: "h", 42: "i/j", 52: "k",
                13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
                14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
                15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
} 

  function polybius(input, encode = true) {
    // your solution code here
    let inputArray = input.toLowerCase().split('');

    let holdSpace = [];
    if (inputArray.some((entry) => entry === " ")){
      for (let space in inputArray){
        if (inputArray[space]=== " ") 
        holdSpace.push(space/2);
      }
    }

    const noSpace = inputArray.reduce((acc, entry) => {
      if (entry != " ")
      acc.push(entry);
      return acc;
    }, []);

      if (encode === false && noSpace.length % 2 != 0){
        return false;
      }

      return encode ? _encode(inputArray): _decode(noSpace, holdSpace)
  }

    function _encode(inputArray){
      return inputArray.reduce((acc , letter) => {
        if (letter === " "){
          acc.push(letter)}
        else if (letter === "i" || letter === "j"){
          acc.push("42")} 
        else {
          for (let number in alpha){
            if (alpha[number] === letter)
            acc.push(number)
          }
        }
        return acc;
      }, []).join('')
    }

    function _decode(noSpace, holdSpace){
      let numArray = [];
      for (let indexString in noSpace){
        const index = Number(indexString);
        if (index % 2 === 0){
          numArray.push(noSpace[index] + noSpace[index+1]);
        }
      }

      let results = numArray.reduce((acc, number) => {
        acc.push(alpha[number]);
        return acc;
      }, []);

      if (holdSpace.length > 0){
        for (let number of holdSpace)
        results.splice(number, 0 , " ");
      }
      return results.join("");
    }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
