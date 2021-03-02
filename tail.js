const assertEqual = function(actual, expected) {
  const errorMessage = `❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`;
  const successMessage = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`

  if (actual === expected) {console.log(successMessage)
  }else{console.log(errorMessage)
  }
};

//-------
// tail function below
const words = ["Yo Yo", "Lighthouse", "Labs"]

const tail = (arr) => {
  let tailArray = [];
 for(let i = 1; i < arr.length; i++) {
   tailArray.push(arr[i])
  }

  console.log(tailArray);
  return tailArray;
}

// Test case 1: assertion check workaround below
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs"); 

// Check original array by it length 
tail(["Yo Yo", "Lighthouse", "Labs"]);
tail(words);
assertEqual(words.length, 3);
