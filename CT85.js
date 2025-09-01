function solution(n){
    let b=0
    while(n>0){
        if(n%2===0){
            n=Math.floor(n/2);
        }else{
            n-=1;
            b++;
        }
    }
    return b
}

console.log(solution(5))
console.log(solution(6))
console.log(solution(5000))

//Programmers L2 점프와 순간이동
