const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const head   = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const tail   = require('./tail');
const without = ('./without');






module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  eqObjects,
  findKey,
  findKeyByValue,
  countLetters,
  letterPositions,
  map,
  takeUntil,
  without
};