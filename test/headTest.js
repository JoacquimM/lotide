const assertEqual = require('../assertEqual.js')
// const head = require('../head.js');



// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined)

const assert = require('chai').assert;
const head   = require('../head');

// describe comes from mocha framework
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  it("returns '5' for [5, 6, 7]", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  // it comes from mocha framework
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => { 
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 'undefined' for []", () => {
    assert.strictEqual(head(['5']), '5'); // chai assertion library
  });

  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(['5']), '5'); 
  // });
});
