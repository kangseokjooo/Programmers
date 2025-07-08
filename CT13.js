function solution(numbers) {
    let arr=numbers.split('');
    const result=new Set();

    const visited=new Array(arr.length).fill(false);

    function dfs(cur){
        if(cur.length>0){
            result.add(Number(cur.join('')));
        }

        for(let i=0;i<arr.length;i++){
            if(!visited[i]){
                visited[i]=true;
                cur.push(arr[i]);
                dfs(cur);
                cur.pop();
                visited[i]=false;
            }
        }
    }
    dfs([]);
    let answer=[]
    for(let a of result){
       if(isPrime(a)){
        answer.push(a);
       }
    }
    return answer.length;
}
function isPrime(num) {
    if (num < 2) return false; 
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) return false; 
    }
    return true; 
}

let num="011"
console.log(solution(num));

// Programmers 소수찾기 L2

