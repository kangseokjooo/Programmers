function solution(n) {
    let num=n.toString(3);

    let reversed=num.split('').reverse().join('')

    return parseInt(reversed,3);
}

console.log(solution(125))

//Programmers L1 3진법 뒤집기