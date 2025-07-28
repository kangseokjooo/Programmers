function solution(sizes) {
    let mw=0;
    let mh=0;
    for(let [w,h] of sizes){
        let big=Math.max(w,h);
        let small=Math.min(w,h);

        mw=Math.max(mw,big);
        mh=Math.max(mh,small);
    }
    return mw*mh
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))

//Programmers L1 최소직사각형