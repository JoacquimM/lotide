const assertArraysEquals = require('../assertArraysEquals.js');

assertArraysEquals([1, 2, 3], [1, 2, 3]);
assertArraysEquals([1, 2, 3], [3, 2, 1]);
assertArraysEquals(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEquals(["1", "2", "3"], ["1", "2", 3]);