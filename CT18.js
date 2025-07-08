
function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  function getGCDofArray(arr) {
    return arr.reduce((acc, cur) => gcd(acc, cur));
  }
  
  function getLCMofArray(arr) {
    return arr.reduce((acc, cur) => lcm(acc, cur));
  }


