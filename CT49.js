function solution(nums){
    const max=nums.length/2;
    const size=new Set(nums).size;
    return Math.min(size,max)
}

console.log(solution([3,1,2,3]))
console.log(solution([3,3,3,2,2,4]));
console.log(solution([3,3,3,2,2,2]));

//Programmers L1 폰켓몬