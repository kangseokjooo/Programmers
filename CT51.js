function solution(numbers){
    let p=[[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    const score=[0,0,0];

    for(let i=0;i<numbers.length;i++){
        for(let j=0;j<3;j++){
            const pattern=p[j];
            const pick=pattern[i%pattern.length];
            if(numbers[i]===pick){
                score[j]++
            }
        }
    }
    
    let max=score[0]
    for(let i=1;i<3;i++){
        if(score[i]>max){
            max=score[i];
        }
    }
    let answer=[]
    for(let i=0;i<3;i++){
        if(score[i]===max){
            answer.push(i+1);
        }
    }
    return answer
}

console.log(solution([1,2,3,4,5]))
console.log(solution([1,3,2,4,2]))

//Programmers L1 모의고사