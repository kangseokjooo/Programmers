function solution(msg) {
    const d={};
    let dSize=26;

    for(let i=0;i<26;i++){
        d[String.fromCharCode(65+i)]=i+1;
    }

    const answer=[]
    let i=0;

    while(i<msg.length){
        let w=msg[i];
        let j=i+1;

        while(j<=msg.length && d[msg.slice(i,j)]){
            w=msg.slice(i,j)
            j++
        }
        answer.push(d[w]);

        if(j<=msg.length){
            const nEntry=w+msg[j-1];
            d[nEntry]=++dSize;
        }
        i+=w.length;
    }
    return answer
}

console.log(solution('KAKAO'))
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'))
console.log(solution('ABABABABABABABAB'))

//Programmers L2 압축(X)