function solution(n, words) {
    const used=new Set()
    used.add(words[0]);

    for(let i=1;i<words.length;i++){
        const p=words[i-1];
        const c=words[i];

        if(p[p.length-1]!==c[0] || used.has(c)){
            const player=(i%n)+1;
            const turn=Math.floor(i/n)+1;
            return [player,turn]
        }
        used.add(c);
    }
    return [0,0]
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);

//Programmers L2 영어 끝말잇기
