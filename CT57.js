function solution(N, stages) {
    let answer=[];
    let total=stages.length;

    for(let i=1;i<=N;i++){
        let stop=stages.filter(s=>s===i).length;
        let rate=total===0 ? 0 :stop/total;
        answer.push({i,rate})
        total-=stop;
    }

    answer.sort((a,b)=>{
        if(b.rate===a.rate){
            return a.i-b.i
        }
        return b.rate-a.rate
    })

    return answer.map(x=>x.i)
    
}

console.log(solution(5,[2,1,2,6,2,4,3,3]))
console.log(solution(4,[4,4,4,4,4]))


//Programmers L1 실패율