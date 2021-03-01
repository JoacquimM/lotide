


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const errorMessage = `❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`;
  const successMessage = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`

  if (actual === expected) {console.log(successMessage)
  }else{console.log(errorMessage)
  }


};

const head = (arr) => {
  return arr[0];

};


// console.log(head([5,6,7]));
// console.log(head(["Hello", "Lighthouse", "Labs"]));
// console.log(head([]));

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined)