function solution(t, p) {
  let len = p.length;
  let count = 0;
  let s = Number(p);

  for (let i = 0; i <= t.length - len; i++) {
    let str = t.slice(i, i + len);
    let num = Number(str);
    if (num <= s) {
      count++;
    }
  }

  return count;
}

console.log(solution("3141592", "271"));
// console.log(solution("500220839878", "7"));
// console.log(solution("10203", "15"));

//Programmers L1 부분 문자열로 자르기
