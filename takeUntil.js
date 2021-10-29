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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"
];

const takeUntil = (array, callback) => {
    let numbers = [];
    for (let element of array) {
        if (callback(element) === false) {
            numbers.push(element);
        } else {
            return numbers;
        }
    }
    return numbers;
};

const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
console.log("---");

const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

