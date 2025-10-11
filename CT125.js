function solution(storey){
    let answer=0

    while(storey>0){
        let digit=storey%10
        let n=Math.floor(storey/10)%10

        if(digit>5){
            answer+=(10-digit)
            storey=Math.floor(storey/10)+1
        }else if(digit<5){
            answer+=digit
            storey=Math.floor(storey/10)
        }else{
            if(n>=5){
                answer+=(10-digit)
                storey=Math.floor(storey/10)+1
            }else{
                answer+=digit
                storey=Math.floor(storey/10)
            }
        }
    }
    return answer
}

console.log(solution(16))
console.log(solution(2554))

//Programmers L2 마법의 엘리베이터(X)