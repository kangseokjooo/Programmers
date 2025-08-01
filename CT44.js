function solution(strings,n){
    let str=strings.sort((a,b)=>{
        if(a[n]===b[n]){
            return a.localeCompare(b)
        }
        return a[n].localeCompare(b[n]);
    })
    
    return str
    
}

console.log(solution(["sun","bed","car"],1))
console.log(solution(["abce","abcd","cdx"],2))

//Programmers L1 문자열 내 마음대로 정렬하기