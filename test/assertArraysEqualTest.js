const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual([1, 2, 3], [1, 4, 3])
assertArraysEqual(["hello", "hi", "bye"], ["hello", "hi", "bye"])