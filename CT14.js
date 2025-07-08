function solution(people, limit) {
    people.sort((a,b)=>a-b);
    var answer = 0;
    let i=0;
    let j=people.length-1;

    while(i<=j){
        if(people[i]+people[j]<=limit){
            i++;
        }
        j--;
        answer++;
    }
    return answer;
}
let p=[70,50,80,50]
let limit=100;

console.log(solution(p,limit))

// Programmers 구명보트 L2

