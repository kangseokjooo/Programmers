function solution(a,b,n){
    let total=0;
    while(n>=a){
        let newCoke=Math.floor(n/a)*b;
        total+=newCoke
        n=Math.floor(n/a)*b+(n%a);

    }
    return total;
}

console.log(solution(2,1,20))
console.log(solution(3,1,20))

//Programmers L1 콜라 문제