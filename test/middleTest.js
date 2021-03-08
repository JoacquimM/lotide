const middle = require('../middle.js');

// middle([1, 2, 3, '4', 5, 6]);
// middle([1, 2, 3,])
// middle([1, 2, true, 4, 5])

// const array = [1, 2, 3, '4', 5, 6];
// middle(array);

/*
expected          input
[ 3, '4' ] [ 1, 2, 3, '4', 5, 6 ]
[ 2 ] [ 1, 2, 3 ]
[ true ] [ 1, 2, true, 4, 5 ]
[ 3, '4' ] [ 1, 2, 3, '4', 5, 6 ]
*/
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [ 3, '4' ] for [1, 2, 3, '4', 5, 6]", () => {

    const result = middle([1, 2, 3, '4', 5, 6])
    assert.deepEqual(result, undefined);
  });
  
  it("returns [ 2 ] for  [ 1, 2, 3 ]", () => {

    const result = middle([ 1, 2, 3 ])
    assert.deepEqual(result,  undefined );
  });
  
});
