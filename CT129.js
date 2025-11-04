function GCD(a,b){
    while(b!==0){
        [a,b]=[b,a%b];
    }
    return a
}
function solution(arrayA, arrayB) {
    let len=arrayA.length; 

    let answer=0;
    let gcdA=arrayA[0]
    let gcdB=arrayB[0];
    for(let i =0;i<len;i++){
        gcdA=GCD(gcdA,arrayA[i])
        gcdB=GCD(gcdB,arrayB[i])
    }
    let va=arrayB.every(b=>b%gcdA!==0)
    let vb=arrayA.every(a=>a%gcdB!==0)
    if(va) answer=Math.max(answer,gcdA)
    if(vb) answer=Math.max(answer,gcdB)

    return answer

}

console.log(solution([10,17],[5,20]))
console.log(solution([10,20],[5,17]))
console.log(solution([14,35,119],[18,30,102]))

//Programmers L2 숫자 카드 나누기