function solution(n, m) {
    var answer = [];
    answer.push(gcd(n,m))
    answer.push(lcm(n,m));
    return answer;
}

function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

console.log(solution(3,12))

//Programmers L1 공약수 공배수