const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here
    
    for (let i = 0; i < sentence.length; i++) {
      const item = sentence[i];
      if (!results[item]) {
        results[item] = [i];
      } else {
        results[item].push(i);
      }
    }
    console.log(results);
    return results;
  };
letterPositions('Hello');  