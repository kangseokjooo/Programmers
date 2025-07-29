function solution(s){
    const answer=[]
    const lastIndex={}
    for(let i=0;i<s.length;i++){
        const char=s[i];
        if(lastIndex[char]===undefined){
            answer.push(-1);
        }else{
            answer.push(i-lastIndex[char])
        }
        lastIndex[char]=i
    }
    return answer;
}

console.log(solution("banana"))

//Programmers L1 가장 가까운 글자