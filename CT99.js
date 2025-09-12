function solution(topping) {
    let answer=0;

    const rMap=new Map();

    for(let t of topping){
        rMap.set(t,(rMap.get(t)||0)+1);
    }
    const lSet=new Set();
    for(let i=0;i<topping.length-1;i++){
        const t=topping[i];

        lSet.add(t);
        rMap.set(t,rMap.get(t)-1);

        if(rMap.get(t)===0){
            rMap.delete(t);
        }
        if(lSet.size===rMap.size){
            answer++;
        }
    }
    return answer
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]))
console.log(solution([1, 2, 3, 1, 4]))

//Programmers L2 롤케이크 자르기