function solution(k, dungeons) {
   let answer=0;

   const visited=Array(dungeons.length).fill(false)

   function dfs(energy,cnt){
        answer=Math.max(answer,cnt);

        for(let i=0;i<dungeons.length;i++){
            const [n,c] =dungeons[i];

            if(!visited[i] && energy>=n){
                visited[i]=true;
                dfs(energy-c,cnt+1);
                visited[i]=false;
            }
        }
   }
   dfs(k,0);
   return answer;
}
console.log(solution(80,[[80,20],[50,40],[30,10]]))

//Programmers L2 피로도