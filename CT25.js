function solution(price, money, count) {
    let arr=[];
    let sum=0;
    for(let i=1;i<=count;i++){
        arr.push(price*i);
        sum+=arr[i-1];
    }  
    if(sum<money){
        return 0;
    }
    return sum-money; 
    
}

console.log(solution(3,20,4))

//Programmers L1 부족한 금액 계산하기