

const assertEqual = require('./assertEqual'); // <---importing function from main file. 
// FUNCTION IMPLEMENTATION
//asserEqual function bellow commented due to importing function from original file.

// const assertEqual = function(actual, expected) {
//   const errorMessage = `❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`;
//   const successMessage = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`

//   if (actual === expected) {console.log(successMessage)
//   }else{console.log(errorMessage)
//   }


// };

const head = (arr) => {
  return arr[0];

};

// Tests for heaed
// console.log(head([5,6,7]));
// console.log(head(["Hello", "Lighthouse", "Labs"]));
// console.log(head([]));

// Test for assertEqual and head  below (do not change)
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined)


module.exports = head;