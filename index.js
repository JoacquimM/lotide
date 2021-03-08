const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEquals = require('./assertArraysEquals');
const assertEqual = require('./assertEqual');
///-----
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertObjectEqual = require('./assertObjectEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findkey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const tail = require('./tail');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEquals: assertArraysEquals,
  assertEqual: assertEqual,
  eqArrays : eqArrays,
  eqObjects :eqObjects,
  assertObjectEqual : assertObjectEqual,
  countLetters :countLetters,
  countOnly :  countOnly,
  findKey :  findkey ,
  findKeyByValue : findKeyByValue ,
  letterPositions : letterPositions,
  tail :  tail ,
};