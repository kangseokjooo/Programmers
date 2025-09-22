function solution(land) {
    const n=land.length
    for(let i=1;i<n;i++){
        for(let j=0;j<4;j++){
            land[i][j]+=Math.max(...land[i-1].filter((_,idx)=>idx!==j));
        }
    }
    return Math.max(...land[n-1]);
}

console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]))

//Programmers L2 땅따먹기