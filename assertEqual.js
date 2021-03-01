// FUNCTION IMPLEMENTATION
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
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);