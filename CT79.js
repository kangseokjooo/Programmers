function solution(s){
    let answer='';
    let isStart=true;

    for(let i=0;i<s.length;i++){
        let c=s[i];

        if(c===' '){
            answer+=' '
            isStart=true;
        }else{
            if(isStart){
                if(/[a-zA-Z]/.test(c)){
                    answer+=c.toUpperCase();
                }else{
                    answer+=c;
                }
                isStart=false;
            }else{
                answer+=c.toLowerCase();
            }
        }
    }
    return answer
}
console.log(solution("3people unFollowed me"))
console.log(solution("for the last week"))

//Programmers L2 JadenCase 문자열 만들기
