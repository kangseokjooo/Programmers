function solution(sequence,k){
    let s=0;
    let e=0;
    let sum=sequence[0];
    let answer=[0,sequence.length-1]

    while(e<sequence.length){
        if(sum===k){
            if(e-s<answer[1]-answer[0]){
                answer=[s,e];
            }
            sum-=sequence[s++]
        }else if(sum<k){
            sum+=sequence[++e];
        }else{
            sum-=sequence[s++]
        }
    }
    return answer
}
console.log(solution([1,2,3,4,5],7))
console.log(solution([1,1,1,2,3,4,5],5))
console.log(solution([2,2,2,2,2],6))

//Programmers L2 연속된 부분수열의 합