function solution(numbers){
    let n=numbers.length;
    let answer=new Array(n).fill(-1);
    let stack=[];

    for(let i=n-1;i>=0;i--){
        let num=numbers[i];

        while(stack.length && stack[stack.length-1]<=num){
            stack.pop();
        }
        if(stack.length){
            answer[i]=stack[stack.length-1];
        }
        stack.push(num);
    }
    return answer;
}

console.log(solution([2, 3, 3, 5]))
console.log(solution([9, 1, 5, 3, 6, 2]))

//Programmers L2 뒤에 있는 큰수
