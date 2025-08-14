function solution(keymap, targets) {
    let minPress={};

    for(let k of keymap){
        for(let i=0;i<k.length;i++){
            let char=k[i];
            let pressCnt=i+1;
            if(minPress[char]===undefined || pressCnt<minPress[char]){
                minPress[char]=pressCnt;
            }
        }
    }

    let result=targets.map(w=>{
        let total=0;
        for(let c of w){
            if(minPress[c]===undefined){
                return -1;
            }
            total+=minPress[c];
        }
        return total;
    })

    return result
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD","AABB"])); 
console.log(solution(["AA"], ["B"])); 
console.log(solution(["AGZ", "BSSS"], ["ASA","BGZ"]));

//Programmers L1 대충 만든 자판