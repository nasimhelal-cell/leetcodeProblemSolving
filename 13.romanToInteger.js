var romanToInt = function(s) {
    const romanValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
  
    for (let i = s.length - 1; i >= 0; i--) {
      let current = romanValues[s[i]];
      let prev = romanValues[s[i + 1]] || 0; // Handling the case when i is the last index
      if (prev <= current) {
        result += current;
      } else {
        result -= current;
      }
    }
  
    return result;
  };
  

  

console.log(romanToInt("LVIII")); // Output: 1994
