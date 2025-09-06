function solution(elements) {
  const n = elements.length;
  const arr = elements.concat(elements);
  const sum = new Set();

  for (let i = 1; i <= n; i++) {
    let s = 0;

    for (let j = 0; j < i; j++) {
      s += arr[j];
    }
    sum.add(s);
    for (let k = i; k < n + i - 1; k++) {
      s += arr[k] - arr[k - i];
      sum.add(s);
    }
  }
  return sum.size;
}

console.log(solution([7, 9, 1, 1, 4]));

//Programmers L1 연속 부분 수열
