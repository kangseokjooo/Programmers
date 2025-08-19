function solution(survey,choices){
    let score={R:0,T:0,C:0, F:0, J:0, M:0, A:0, N:0};

    for(let i=0;i<survey.length;i++){
        let [a,b]=survey[i].split('');
        let c=choices[i];

        if(c<4){
            score[a]+=4-c;
        }else if(c>4){
            score[b]+=c-4;
        }
    }

    let answer=''
    answer += score["R"] >= score["T"] ? "R" : "T";
    answer += score["C"] >= score["F"] ? "C" : "F";
    answer += score["J"] >= score["M"] ? "J" : "M";
    answer += score["A"] >= score["N"] ? "A" : "N";
    return answer
}

console.log(solution(['AN','CF','MJ','RT','NA'],[5,3,2,7,5]))
console.log(solution(['TR','RT','TR'],[7,1,3]))


//Programmers L1 성격유형 검사하기