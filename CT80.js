function solution(s) {
    let cnt=0;
    let remove=0

    while(s!=='1'){
        let zero=(s.match(/0/g)|| []).length;
        remove+=zero;
        s=s.replace(/0/g,'');

        s=s.length.toString(2);
        cnt++;
    }
    return [cnt,remove]
}

console.log(solution("110010101001"))
console.log(solution("01110"))
console.log(solution("1111111"))

//Programmers L2 이진 변환 반복하기