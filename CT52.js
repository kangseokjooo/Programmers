function solution(n,m,section){
    let cnt=0;
    let i=0;
    while(i<section.length){
        const start=section[i];
        const end=start+m-1;
        cnt++;

        while(i<section.length && section[i]<=end){
            i++;
        }
    }
    return cnt;
}

console.log(solution(8,4,[2,3,6]))
console.log(solution(5,4,[1,3]))
console.log(solution(4,1,[1,2,3,4]))

//Programmers L1 덧칠하기