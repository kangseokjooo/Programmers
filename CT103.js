function solution(word){
    const arr=['A','E','I','O','U']
    const weight=[781,156,31,6,1]

    let answer=0;

    for(let i=0;i<word.length;i++){
        let idx=arr.indexOf(word[i]);
        answer+=idx*weight[i]+1;
    }
    return answer
}

console.log(solution("AAAAE"))
console.log(solution("AAAE"))
console.log(solution("I"))
console.log(solution("EIO"))

//Programmers L2 모음사전