function solution(number, limit, power) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        let cnt = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                cnt++; 
                if (j !== i / j) cnt++; 
            }
        }

        sum += cnt > limit ? power : cnt;
    }

    return sum;
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));

//Programmers L1 기사단원의 무기
