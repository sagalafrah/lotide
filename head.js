const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ Assertion passed: ${actual}===${expected}`);
    } else {
        console.log(`🛑 Assertion failed: ${actual}!==${expected}`);
    }
}
const head = function(array){
    return array[0];
};
