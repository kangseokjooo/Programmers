function solution(n){
    const isPrime=Array(n+1).fill(true)
    isPrime[0]=isPrime[1]=false;

    for(let i=2;i*i<=n;i++){
        if(isPrime[i]){
            for(let j=i*i;j<=n;j+=i){
                isPrime[j]=false
            }
        }
    }
    return isPrime.filter(Boolean).length;
}


console.log(solution(10))
console.log(solution(5))

//Programmers L1 소수만들기