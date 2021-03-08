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
/* Test code commented out due to transport in to assertEqualTest.js 
  ( did this b/c it was causing extra test cases to run from assertEqual.js to head.js 
   when we exported the function to head.js.  Moved assertEqual tets code in to a assertEqualTest file in 
   order to seperate it from the main function file.head.js so it wouldnt export the test codes wherever 
   the function was being required).
*/

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

module.exports = assertEqual; // <---- exporting the function assertEqual() to wherever it wants to be usen by requireing it. 