function solution(weights) {
    const map=new Map()
    let answer=0;

    weights.sort((a,b)=>a-b);

    for(let w of weights){
        for(let r of [1,1/2,2/3,3/4]){
            const t=w*r;
            if(map.has(t)) answer+=map.get(t);
        }

        map.set(w,(map.get(w)||0)+1)
    }
    
    return answer
}

console.log(solution([100,180,360,100,270]))

//Programmers L2 시소 짝꿍