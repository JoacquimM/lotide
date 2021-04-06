
const middle = (arr) => {
  // let newArray = [];
  // return(arr.length <= 2 ? )
  
  let newArray = arr.length <= 2 ? [] : midArrayElems();
  function midArrayElems(){ 
    //return 'test works'
    let middleElems = arr.length % 2 === 0 ? even() : odd();
    function odd(){
       let oddArrayCopy = [...arr]
       let indexOdd = (((oddArrayCopy.length - 1) / 2) + 1) - 1
       //return arr[indexOdd]; //answer for odd array passed.
       return oddArrayCopy.splice(indexOdd,1)
    };
    function even(){
      let evenArrayCopy = [...arr]
      let indexEven = ((((evenArrayCopy.length - 2) / 2) + 2) - 2); // 2 start add 1
      // let indexEven2 = ((((arr.length - 2) / 2) + 2) - 2) + 1;
      //return  [indexEven1 + 1, indexEven2 + 1]; //answer for even array passed.
      // let indexEven = ((((arr.length - 2) / 2) + 2) - 2); // 2 start add 1
      // return [indexEven, indexEven + 1];
      return evenArrayCopy.splice(indexEven,2)//answer for even array passed.
    };
    return middleElems;
  }

  
  
  console.log(newArray, arr);// this is your answer 
}

middle([1, 2, 3, '4', 5, 6]);