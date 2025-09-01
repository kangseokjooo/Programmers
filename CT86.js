function solution(k, tangerine) {
    const map={};
    for(let t of tangerine){
        map[t]=(map[t]|| 0)+1;
    }
    const cnt=Object.values(map).sort((a,b)=>b-a)

    let sum=0
    let answer=0;
    for(let c of cnt){
        sum+=c;
        answer++;
        if(sum>=k)break;
    }
    return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));

//Programmers L2 귤 고르기
