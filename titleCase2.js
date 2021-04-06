const titleCase  = function(text) {
  // Your code in here ...
  
  let textCopy = text.toLowerCase().split(' ');
  console.log(textCopy);
  let answer = '';

  for( let i = 0 ; i < textCopy.length ; i++ ) {
    let testWord = textCopy[i];
    
      let outPut = testWord[0].toUpperCase() + testWord.slice(1)
      console.log(outPut);
      answer += `${outPut} `;

    
  }
  console.log(answer.trim());
};

/*
titleCase("this is an example") should return "This Is An Example"
titleCase("test") should return "Test"
titleCase("i r cool") should return "I R Cool"
titleCase("WHAT HAPPENS HERE") should return "What Happens Here"
titleCase("") should return ""
titleCase("A") should return "A"
*/

//  x = "this is an example"
x = "HI HI" 
titleCase(x)
