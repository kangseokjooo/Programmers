function solution(s) {
    let answer=0;
    let cntX=0;
    let cntNotX=0;
    let x='';

    for(let i=0;i<s.length;i++){
        if(cntX===0 && cntNotX===0){
            x=s[i];
        }
        if(s[i]===x) cntX++;
        else cntNotX++;

        if(cntX===cntNotX){
            answer++;
            cntNotX=0;
            cntX=0;
        }
    }
    if(cntNotX!==0 || cntX!==0) answer++;

    return answer
    
}

console.log(solution("banana"))
console.log(solution("abracadabra"))
console.log(solution("aaabbaccccabba"))

//Programmers L1 문자열 나누기