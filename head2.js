
const testObject = {

// FUNCTION IMPLEMENTATION
 assertEqual(actual, expected) {
  const errorMessage = `❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`;
  const successMessage = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`

  if (actual === expected) {console.log(successMessage)
  }else{console.log(errorMessage)
  }


},

 head(arr){
  return arr[0];

}

}

testObject.assertEqual(head([5,6,7]), 5)
testObject.assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
testObject.assertEqual(head([]), undefined)

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined)