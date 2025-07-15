function solution(participant, completion) {
    const map=new Map();

    for(let p of participant){
        map.set(p,(map.get(p)||+0)+1)
    }
    for(let c of completion){
        map.set(c,map.get(c)-1);
    }
    for(let [name,cnt] of map){
        if(cnt>0) return name
    }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); 
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])); 
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); 

//Programmers L1 완주하지 못한 선수
