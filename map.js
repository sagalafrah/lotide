function eqArrays(arr1,arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
  
  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };



const words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item)); //.push adds new items to the end of the array!
    }
    return results;
}
// test to see if it works
const results1 = map(words, word => word[0]); 
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);