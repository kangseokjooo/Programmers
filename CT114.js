function solution(n) {
   const MOD=1000000007
   if(n===1) return 1
   if(n===2) return 2

   let a=1;
   let b=2;
   let answer=0;
   for(let i=3;i<=n;i++){
    answer=(a+b)%MOD
    a=b;
    b=answer
   }
   return answer

}

console.log(solution(4))

//Programmers L2 2*n 타일링