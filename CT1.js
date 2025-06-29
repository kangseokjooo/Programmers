function solution(arr, flag) {
    var answer = [];
    for(let i=0;i<arr.length;i++){
        if(flag[i]==true){
            for(let j=0;j<arr[i]*2;j++){
                answer.push(arr[i]);
            }
        }else{
            for(let k=0;k<arr[i];k++){
                answer.pop();
            }
        }
        }
        return answer;
    }
    


let arr=[3,2,4,1,3]
let flag=[true,false,true,false,false];

console.log(solution(arr,flag))