function solution(x, y, n) {
    if(x===y) return 0;
    const visited=new Set();
    const q=[[x,0]];
    let idx=0;

    while(idx<q.length){
        const [cur,cnt]=q[idx++];
        for(let next of [cur+n,cur*2,cur*3]){
            if(next>y)continue;
            if(!visited.has(next)){
                if(next===y) return cnt+1;
                visited.add(next);
                q.push([next,cnt+1]);
            }
        }
    }
    return -1;
}

console.log(solution(10,40,5))
console.log(solution(10,40,30))
console.log(solution(2,5,4))


//Programmers L2 숫자 변환하기(X)