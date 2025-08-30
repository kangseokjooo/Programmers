function solution(n) {
    let fib=[0,1];
    for(let i=2;i<=n;i++){
        fib[i]=(fib[i-1]+fib[i-2])%1234567;
    }
    return fib[n];
}

console.log(solution(3))
console.log(solution(5));

//Programmers L2 피보나치 수 