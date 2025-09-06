function solution(s) {
   let answer=0;
   const n=s.length;

   const pair={
    ')':'(',
    ']':'[',
    '}':'{'
   }

   function isValid(str){
    const stack=[];
    for(let c of str){
        if(['(','[','{'].includes(c)){
            stack.push(c);
        }else{
            if(stack.length===0 || stack[stack.length-1]!==pair[c]){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length===0;
   }
   for(let i=0;i<n;i++){
    const r=s.slice(i)+s.slice(0,i);
    if(isValid(r)) answer++;
   }
   return answer
}

console.log(solution("[](){}"))
console.log(solution("}]()[{"))
console.log(solution("[)(]"))

//Programmers L2 괄호 회전하기