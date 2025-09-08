function solution(n,left,right){
    const answer=[]
    for(let i=left;i<=right;i++){
        const r=Math.floor(i/n);
        const c=i%n;
        answer.push(Math.max(r,c)+1);
    }
    return answer
}

console.log(solution(3,2,5))
console.log(solution(4,7,14))

//Programmers L2 배열 자르기