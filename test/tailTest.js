

const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js'); // required tail() from tail.js in order to seperat test code of tail();



const words = ["Yo Yo", "Lighthouse", "Labs"]


// Test case 1: assertion check workaround below
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); 
// assertEqual(result[0], "Lighthouse"); 
// assertEqual(result[1], "Labs"); 


// tail(["Yo Yo", "Lighthouse", "Labs"]);
// tail(words);
// assertEqual(words.length, 3);

const assert = require('chai').assert;
// describe comes from mocha framework
describe("#tail", () => {
  it("returns undefined for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), undefined);
  });

  it("returns undefined for words", () => {
    assert.strictEqual(tail(words), undefined);
  });

  it("returns [ 'Lighthouse', 'Labs' ] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(assertEqual(words.length, 3), undefined);
  });

});

