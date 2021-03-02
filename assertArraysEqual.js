const eqArrays = (arr1, arr2) => {
  let answer = '';
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      answer = true;
    } else{
      answer = false;
    }
  }
  // console.log(answer);
  return(answer);

};

const assertArraysEquals = (arr1, arr2) => {
  const errorMessage = `❌ ❌ ❌ Assertion Failed: ${arr1} !== ${arr2}`;
  const successMessage = `✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`;

  let test = eqArrays(arr1, arr2);
  if ( test === true){
    console.log(successMessage);
  } else {
    console.log(errorMessage);
  }

}

assertArraysEquals([1, 2, 3], [1, 2, 3]);
assertArraysEquals([1, 2, 3], [3, 2, 1]);
assertArraysEquals(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEquals(["1", "2", "3"], ["1", "2", 3]);