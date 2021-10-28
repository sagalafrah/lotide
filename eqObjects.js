
   
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅  Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
    }
  };


const eqObjects = function(object1, object2) {
    //compare lengths
    
    let objectOneLength = Object.keys(object1)
    let objectTwoLength = Object.keys(object2)
  
    if (objectOneLength.length === objectTwoLength.length) {
      for (let keys of objectOneLength) {
        if (Array.isArray(objectOneLength[keys]) && Array.isArray(objectTwoLength[key])) {
          if (!eqArrays(objectOneLength[key],objectTwoLength[key])) {
            return false;
          }
        }
      }
      return true
    } 
      return false
  };
  


  const ab = { a: "1", b: "2"};
  const ba = { b: "2", a: "1"};
  console.log(assertEqual(eqObjects(ab,ba),true)); 