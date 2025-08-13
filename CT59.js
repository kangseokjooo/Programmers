function solution(lottos, win_nums) {
   const zeroCnt=lottos.filter(v=>v===0).length
   const matchCnt=lottos.filter(v=>win_nums.includes(v)).length

   const best=matchCnt+zeroCnt;
   const worst=matchCnt

   const rank=(n)=> n>=2 ? 7-n : 6

   return [rank(best),rank(worst)]
}


console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); 
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));  
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));

//Programmers L1 로또의 최고 순위
