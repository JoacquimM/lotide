const pigLatin = () => {
  let answer = [];
  for( let i = 2; i < process.argv.length; i++ ) {
    let word = process.argv[i];
    word += 'ay';
    splitWord = word.split('');
    let firstLetter = splitWord.splice(0,1);
    splitWord.splice(-2,0,firstLetter[0]);
    let finalWord = splitWord.join('')
    
    answer.push(finalWord+=' ');
      //console.log(splitWord,firstLetter, finalWord);
    
  }
   console.log(answer.join(''));

}

pigLatin()

//pig latin --> igpay atinlay