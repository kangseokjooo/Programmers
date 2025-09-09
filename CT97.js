function solution(s) {
    let arr=s.slice(2,-2).split("},{").map(s=>s.split(",").map(Number))
    
    arr.sort((a,b)=>a.length-b.length)

    let answer=[]
    let seen=new Set()

    for(let a of arr){
        for(let b of a){
            if(!seen.has(b)){
                answer.push(b);
                seen.add(b);
            }
        }
    }
    return answer
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"))
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"))
console.log(solution("{{20,111},{111}}"))
