function solution(n, wires) {
  let answer=Infinity

  const graph=Array.from({length:n+1},()=>[])
  for(const [a,b] of wires ){
    graph[a].push(b);
    graph[b].push(a)
  }

  for(const [a,b] of wires){
    const visited=Array(n+1).fill(false)
    visited[b]=true

    const cnt=bfs(a,graph,visited)
    const diff=Math.abs(n-cnt-cnt);
    answer=Math.min(answer,diff)
  }
  return answer
}
function bfs(s,g,v){
    let q=[s];
    let cnt=0;
    v[s]=true;

    while(q.length){
        const node=q.shift();
        cnt++;
        for(const n of g[node]){
            if(!v[n]){
                v[n]=true
                q.push(n)
            }
        }
    }
    return cnt
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
