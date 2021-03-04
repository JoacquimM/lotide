const assertEqual = function(actual, expected) {
  const errorMessage = `❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`;
  const successMessage = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`

  // console.assert(`${actual}` === `${expected}`, {successMessage});
  // console.assert(`${actual}` !== `${expected}`, {errorMessage});
  if (actual === expected) {console.log(successMessage)
  }else{console.log(errorMessage)
  }


};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);






const findKeyByValue = (obj, value) => {
let objCopy = obj;
let valueCopy = value;
let answerKey = '';
//let noMatch = 0;

for (let key in objCopy){
  //console.log(key)
  objCopy[key] === value ?  answerKey = key : answerKey = undefined;
}
//console.log(answerKey);
return answerKey
} 

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
findKeyByValue(bestTVShowsByGenre, "That '70s Show");


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);