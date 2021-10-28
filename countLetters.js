const countLetters = word => {
    const count = {};
    for (let letter of word) {
        if (count[letter]) {
            count[letter]++;
        } else {
            count[letter] = 1;
        }

    }
    return count;
};
console.log(countLetters('LHL'));







// Create the object which will store the occurrences
//// Loop over the letters of the word
// // if the property isn't in the object, it means that the letter is a new one and we'll create this property and assign it the value 1
//else, it means that the property is already there and we just increment it by 1