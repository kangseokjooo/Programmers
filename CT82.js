function solution(s) {
  const stack = [];
  for (let c of s) {
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));

//Programmers L2 짝지어 제거하기
