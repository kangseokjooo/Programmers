function solution(n) {
  const cntOne = (num) => num.toString(2).split("1").length - 1;

  let target = cntOne(n);
  let next = n + 1;

  while (true) {
    if (cntOne(next) === target) {
      return next;
    }
    next++;
  }
}

console.log(solution(78));
console.log(solution(15));

//Programmers L2 다음 큰 숫자
