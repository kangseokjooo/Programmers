function solution(numbers) {
    const t=new Set()
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            t.add(numbers[i]+numbers[j]);
        }
    }
    let answer=Array.from(t);

    answer.sort((a,b)=>a-b);
    return answer
}

console.log(solution([5,0,2,7]))

//두개 뽑아서 더하기 Programmers L1 