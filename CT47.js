function solution(n, arr1, arr2) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const binary = (arr1[i] | arr2[i]).toString(2).padStart(n, "0");
    const line = binary.replace(/1/g, "#").replace(/0/g, " ");
    result.push(line);
  }
  return result;
}


console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

console.log(
  solution(6, [46, 33, 33, 22, 31, 31, 50], [27, 56, 19, 14, 14, 10])
);
//Programmers L1 비밀지도
