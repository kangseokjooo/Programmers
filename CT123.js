function solution(n) {
    const mat=Array.from({length:n},()=>Array(n).fill(0));
    const total=(n*(n+1))/2;

    const dir=[[1,0],[0,1],[-1,-1]]
    let idx=0;

    let x=0,y=0;
    for(let i=1;i<=total;i++){
        mat[x][y]=i;

        let nx=x+dir[idx][0];
        let ny=y+dir[idx][1];

        if(nx<0||nx>=n||ny<0||ny>=n||mat[nx][ny]!==0){
            idx=(idx+1)%3;
            nx=x+dir[idx][0];
            ny=y+dir[idx][1];
        }
        x=nx; y=ny;
    }
    const answer=[];
    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            answer.push(mat[i][j])
        }
    }
    return answer
}

console.log(solution(4))
console.log(solution(5))
console.log(solution(6))

//Programmers L2 삼각달팽이