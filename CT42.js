function solution(s){
    const wordMap={
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    for(let w in wordMap){
        const r=new RegExp(w,'g');
        s=s.replace(r,wordMap[w]);
    }
    return Number(s);
}

console.log(solution("one4seveneight"))
//1478
console.log(solution("2three45sixseven"))
//234567

//Programmers L1 숫자 문자열과 영단어