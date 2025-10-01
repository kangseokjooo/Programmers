function solution(queue1, queue2) {
    const n=queue1.length;
    const arr=queue1.concat(queue2);
    let sum1=queue1.reduce((a,b)=>a+b,0)
    let sum2=queue2.reduce((a,b)=>a+b,0)

    const t=sum1+sum2;

    if(t%2!==0){
        return -1
    }
    const h=t/2;

    let i=0,j=n
    let cnt=0;

    while(i<2*n&&j<2*n){
        if(sum1===h) return cnt;

        if(sum1>h){
            sum1-=arr[i];
            i++;
        }else{
            sum1+=arr[j];
            j++;
        }
        cnt++;
        if(cnt>n*3) return -1;
    }
    return -1
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 1], [1, 5]));


//Programmers L2 두큐합 같게 만들기