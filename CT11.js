function solution(arr) {
    arr.sort((a,b)=>a-b);
    if(arr.length===1){
        return arr[0];
    }
    let gcd=getgcd(arr[0],arr[1])
    let lcm=(arr[0]*arr[1]/gcd);

    for(let i=2;i<arr.length;i++){
        gcd=getgcd(lcm,arr[i]);
        lcm=(lcm*arr[i])/gcd;
    }
    return lcm
}

function getgcd(num1,num2){
    if(num1%num2===0){
        return num2;

    }
    return getgcd(num2,num1 % num2)
}

let arr = [1, 2, 3];
console.log(solution(arr)); 

//Programers N개의 최소 공배수 L2