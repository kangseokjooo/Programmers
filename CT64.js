function solution(X, Y) {
    let arrX = X.split('');
    let arrY = Y.split('');
    let result = [];

    for (let i = 0; i < arrX.length; i++) {
        for (let j = 0; j < arrY.length; j++) {
            if (arrX[i] === arrY[j]) {
                result.push(arrX[i]);
                arrY.splice(j, 1);   
                break;           
            }
        }
    }

    //console.log(result)

    if (result.length === 0) return "-1";
    result.sort((a, b) => b - a);
    if (result[0] === "0") return "0";
    return result.join('');
}


console.log(solution("100","2345"));  
console.log(solution("100","203045"));
console.log(solution("100","123450"));
console.log(solution("12321","42531"));
console.log(solution("5525","1255"));  


//Programmers L1 숫자짝꿍
