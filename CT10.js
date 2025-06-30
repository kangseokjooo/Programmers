function solution(clothes) {
    const map=new Map();
    for(let [item,type] of clothes){
       map.set(type,(map.get(type) || 0)+1)
    }
    let c=1;
    for(let type of map.values()){
        c*=(type+1)
    }

    return c-1;

}

let clothes=[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
console.log(solution(clothes));

//의상 Programmers