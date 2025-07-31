function solution(food){
    let l=''
    for(let i=1;i<food.length;i++){
        const cnt=Math.floor(food[i]/2);
        l+=i.toString().repeat(cnt);
    }
    const r=l.split('').reverse().join('')

    return l+'0'+r
}

console.log(solution([1,3,4,6]))
console.log(solution([1,7,1,2]))

//Programmers L1 푸드 파이트 대회