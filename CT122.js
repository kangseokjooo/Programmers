function solution(number, k) {
    let answer=[]
    let remove=k;

    for(let n of number){
        while(remove>0 && answer.length > 0 && answer[answer.length-1]<n){
            answer.pop()
            remove--
        }
        answer.push(n);
    }

    return answer.slice(0,number.length-k).join('')

}

console.log(solution('1924',2))
console.log(solution('1231234',2))
console.log(solution('4177252841',4))

//Programmers L2 큰 수 만들기