function solution(n,t,m,p){
    let answer=''
    let numbers=''

    let num=0;
    while(numbers.length < t*m){
        numbers+=num.toString(n).toUpperCase();
        num++;
    }

    for(let i=0;i<numbers.length;i++){
        if(answer.length===t) break;
        if(i%m===p-1){
            answer+=numbers[i];
        }
    }
    return answer
}

console.log(solution(2,4,2,1))
console.log(solution(16,16,2,1))
console.log(solution(16,16,2,2))

//Programmers L2 3차 n진수 게임