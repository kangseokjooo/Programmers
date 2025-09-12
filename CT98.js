function solution(priorities, location) {
    let queue=priorities.map((p,i)=>[p,i]);
    let cnt=0;

    while(queue.length){
        let [priority,idx]=queue.shift();

        if(queue.some(([p])=>p>priority)){
            queue.push([priority,idx])
        }else{
            cnt++;
            if(idx===location) return cnt;
        }
    }
}

console.log(solution([2, 1, 3, 2],2))
console.log(solution([1, 1, 9, 1, 1, 1],0))

//Programmers L2 프로세스