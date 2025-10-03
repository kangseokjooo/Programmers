function solution(bridge_length, weight, truck_weights) {
    let answer=0;
    let bridge=Array(bridge_length).fill(0);
    let total=0;

    while(bridge.length>0){
        answer++;

        total-=bridge.shift();

        if(truck_weights.length>0){
            if(total+truck_weights[0]<=weight){
                let t=truck_weights.shift()
                bridge.push(t);
                total+=t;
            }else{
                bridge.push(0);
            }
        }
    }
    return answer
}

console.log(solution(2, 10, [7,4,5,6]));
console.log(solution(100, 100, [10]));   
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])); 

//programmers L2 다리를 지나는 트럭