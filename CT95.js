function solution(progresses, speeds) {
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  const answer = [];

  let p = days[0];
  let cnt = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= p) {
      cnt++;
    } else {
      answer.push(cnt);
      cnt = 1;
      p = days[i];
    }
  }
  answer.push(cnt);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

//Programmers L2 기능개발
