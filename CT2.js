function solution(n,w,num){
    const layer=Math.floor((num-1)/w);

    const isLToR=layer%2===0;
    const idxInRow=isLToR? (num-1)%w:w-1-((num-1)%w);

    const total=Math.ceil(n/w);

    let cnt=1;

    for(let l=layer+1;l<total;l++){
        const start = l * w + 1;
        const end = Math.min((l + 1) * w, n);
        const dir = l % 2 === 0;
        const idx = dir ? idxInRow : w - 1 - idxInRow;
        if (start + idx <= end) cnt++;
    }
    return cnt;
}

console.log(solution(13,3,6));