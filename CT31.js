function solution(left, right) {
    let arr=[];
    for(let i=left;i<=right;i++){
        arr.push(i);
    }
    let main=[]
    arr.forEach(num=>{
        let cnt=0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                cnt++;
            }
        }
        main.push(cnt);

    })
    let sum=0;
    for(let i=0;i<main.length;i++){
        if(main[i]%2===0){
            sum+=arr[i];
        }
        else{
            sum-=arr[i];
        }
    }
    return sum;
}


console.log(solution(24,27))

//Programmers L1 약수의 개수와 덧셈