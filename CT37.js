function solution(s) {
    let strArr = s.split('');
    let index = 0; 

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === ' ') {
            index = 0; 
        } else {
            if (index % 2 === 0) {
                strArr[i] = strArr[i].toUpperCase();
            } else {
                strArr[i] = strArr[i].toLowerCase();
            }
            index++; 
        }
    }
    return strArr.join('');
}

console.log(solution("try hello world"))

//Programmers L1 이상한 문자열 만들기