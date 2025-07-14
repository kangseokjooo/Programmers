function solution(arr) {
    if (arr.length === 1) return [-1];

    const min = Math.min(...arr);         
    return arr.filter(num => num !== min); 
}



console.log(solution([10]))

//Programmers L1제일 작은 수  제거하기