function solution(k,m,score){
    let arr=score.filter(x=>x<=k).sort().reverse();
    let total=0;
    for(let i=0;i+m<=arr.length;i+=m){
        const box=arr.slice(i,i+m);
        const min=box[box.length-1];
        total+=min*m
    }
    return total;
}

console.log(solution(3,4,[1,2,3,1,2,3,1]))
console.log(solution(4,3,[4,1,2,2,4,4,4,4,1,2,4,2]))


//Programmers L1 과일 장수
