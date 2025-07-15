function solution(s) {
    const len=s.length;
    const m=Math.floor(len/2);

    if(len%2===0){
        return s.slice(m-1,m+1);
    }else{
        return s.charAt(m)
    }
}

console.log(solution("abcde"))
console.log(solution("qwer"))

//Programmers L1 가운데 글자 가져오기