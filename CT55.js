function solution(nums){
    let cnt=0;
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                let sum=nums[i]+nums[j]+nums[k];
                if(isPrime(sum)){
                    cnt++;
                }
            }
        }
    }
    return cnt
}
function isPrime(num){
    if(num<2) return false
     for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(solution([1,2,3,4],1))
console.log(solution([1,2,7,6,4],4))


//Programmers L1 소수 만들기