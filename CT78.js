function solution(s){
   let cnt=0;
   for(let c of s){
    if(c==='('){
        cnt++;
    }else{
        cnt--;
    }
    if(cnt<0) return false;
   }
   return cnt===0
}

console.log(solution("()()"));
console.log(solution("(())()"))
console.log(solution(")()("))

//Programmers L2 올바른 괄호