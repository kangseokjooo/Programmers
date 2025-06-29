// 1+1=2
// 1+2=3
// 3+2=5
// 5+3=8

function solution(n) {
   const MOD=1234567
   const arr=new Array(n+1).fill

   arr[1]=1;
   arr[2]=2;
   for(let i =3;i<=n;i++){
    arr[i]=(arr[i-1]+arr[i-2])%MOD
   }

   return arr[n];
}

console.log(solution(2));
console.log(solution(3));

//멀리 뛰기