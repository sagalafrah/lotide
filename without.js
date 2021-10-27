const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};
  
  
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
}
 
  
function without(source, itemsToRemove) {
  //store array //
  let newArr = [];
  // for loop //
  for (i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
  
  
      newArr.push(source[i]);
    }
  }
  return newArr;
}