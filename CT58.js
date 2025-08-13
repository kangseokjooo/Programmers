function solution(dartResult) {
    let r=dartResult.match(/\d+[SDT][*#]?/g);
    let score=[];

    for(let i=0;i< r.length;i++){
        let m=r[i].match(/(\d+)([SDT])([*#]?)/);
        let [_,num,bonus,option]=m;
        num=Number(num);

        if(bonus==='D') num=Math.pow(num,2);
        else if(bonus==='T')num=Math.pow(num,3);

        if(option==='*'){
            num*=2;
            if(i>0) score[i-1]*=2;
        }else if(option==='#'){
            num*=-1;
        }
        score.push(num);
    }
    let sum=0;
    for(let i=0;i<score.length;i++){
        sum+=score[i];
    }
    return sum;
}


console.log(solution("1S2D*3T")); 
console.log(solution("1D2S#10S")); 
console.log(solution("1D2S0T")); 
console.log(solution("1S*2T*3S")); 
console.log(solution("1D#2S*3S")); 
console.log(solution("1T2D3D#")); 
console.log(solution("1D2S3T*")); 

//Programmers L1 [1차] 다트 게임