function solution(n, k) {
    const base=n.toString(k);

    const part=base.split('0')

    let answer=0;
    for(let p of part ){
        if(p==='')continue
        const num=Number(p)
        if(isPrime(num)) answer++;
    }
    return answer
}
function isPrime(num){
    if(num<2) return false
    if(num===2) return true
    if(num%2===0) return false
    const sqr=Math.floor(Math.sqrt(num));
    for(let i=3;i<=sqr;i+=2){
        if(num%i===0) return false;
    }
    return true
}

console.log(solution(437674,3))
console.log(solution(110011,10))

//Programmers L2 k진수에서 소수 개수 구하기
