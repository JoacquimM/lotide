

const reverse = () => {
  let answer = []

  for( let i = 2; i < process.argv.length; i++ ){
    let word = process.argv[i];
    let wordReversed = '';
    for ( let j = word.length - 1; j >= 0; j-- ){
      wordReversed += word[j];
    }
    answer.push( wordReversed );
    answer.push('\n')
    
  }
  // console.log(answer.toString().replace(/[,]/g,''))
  console.log(answer.toString().replace(/,/g,''))
  
 
}

reverse()