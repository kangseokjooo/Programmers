function solution(s) {
   const arr=s.split(' ');
   arr.sort((a,b)=> a-b);
   let answer=`${arr[0]} ${arr[arr.length-1]}`
   

   return answer;
   
}

let str="-1 -1"

console.log(solution(str))

//최대값과 최솟값

