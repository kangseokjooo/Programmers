function solution(n,a,b){
    let r=0;
    while(a!==b){
        a=Math.ceil(a/2);
        b=Math.ceil(b/2);
        r++;
    }
    return r
}

console.log(solution(8,4,7));

//Programmers L2 예상 대진표