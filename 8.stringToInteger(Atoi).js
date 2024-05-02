var myAtoi = function (s) {
    s = s.trim();
    let checkStr = s;
  
    let sign = "+";
  
    if (s.charAt(0) === "+" || s.charAt(0) === "-") {
      sign = s.charAt(0);
      checkStr = checkStr.slice(1);
    }
  
    let digits = [];
  
    let loopOverArray = checkStr.split("");
  
    for (const item of loopOverArray) {
      if (isDigit(item)) {
        digits.push(item);
      } else break;
    }
  
    let res = digits.join("");
  
    let calculatedNumber = 0;
    if (sign === "+") {
      calculatedNumber = res * 1;
    } else if (sign === "-") {
      calculatedNumber = -1 * res;
    }
    return roundTo32BitRange(calculatedNumber);
  };
  
  const isDigit = (s) => s >= "0" && s <= "9";
  
  function roundTo32BitRange(num) {
    const lowerBound = Math.pow(-2, 31);
    const upperBound = Math.pow(2, 31) - 1;
  
    if (num < lowerBound) {
      return lowerBound;
    } else if (num > upperBound) {
      return upperBound;
    } else {
      return num;
    }
  }