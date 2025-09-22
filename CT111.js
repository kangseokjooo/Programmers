function solution(order) {
    const st=[];
    let answer=0;
    let idx=0;
    const n=order.length;

    for(let i=1;i<=n;i++){
        st.push(i);

        while(st.length>0 && st[st.length-1]===order[idx]){
            st.pop()
            idx++;
            answer++;
        }
    }
    return answer
}

console.log(solution([4, 3, 1, 2, 5]))
console.log(solution([5, 4, 3, 2, 1]))

//Programmers L2 택배상자