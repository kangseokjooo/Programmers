function solution(d, budget) {
  d.sort((a, b) => a - b);
  let cnt = 0;
  for (let i = 0; i < d.length; i++) {
    if (budget >= d[i]) {
      budget -= d[i];
      cnt++;
    } else {
      break;
    }
  }
  return cnt;
}

console.log(solution([2, 2, 3, 3], 10));

//Programmers L1 예산
