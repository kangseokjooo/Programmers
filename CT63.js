function solution(n, lost, reserve) {
    let lostSet=lost.filter(x=>!reserve.includes(x));
    let reserveSet=reserve.filter(x=>!lost.includes(x));

    lostSet.sort((a,b)=>a-b);
    reserveSet.sort((a,b)=>a-b);

    for(let r of reserveSet){
        let idx=lostSet.indexOf(r-1);
        if(idx!==-1){
            lostSet.splice(idx,1);
            continue
        }
        idx=lostSet.indexOf(r+1);
        if(idx!==-1){
            lostSet.splice(idx,1);
        }
    }
    return n-lostSet.length
}


console.log(solution(5, [2,4], [1,3,5])); 
console.log(solution(5, [2,4], [3]));     
console.log(solution(3, [3], [1]));   


//Programmers L1 체육복