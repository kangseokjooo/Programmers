function solution(A,B){
    var answer = 0;

    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);

    for(let i=0;i<A.length;i++){
        answer+=A[i]*B[i];
    }

    return answer
   
}

let a=[1,2];
let b=[3,4];

console.log(solution(a,b))

//최솟 값 만들기