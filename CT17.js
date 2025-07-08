function solution(n){
    let cnt=0;
    for(let d=1;d*d<=n;d++){
        if(n%d===0){
            if(d%2===1)cnt++;
            const pair=n/d;
            if(pair!==d && (pair & 1)) cnt++;
        }
    }
    return cnt;
}

console.log(solution(15))

//Programmers L2 숫자의 표현