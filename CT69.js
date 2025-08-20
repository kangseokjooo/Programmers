function solution(new_id){
    let id=new_id.toLowerCase();

    id=id.replace(/[^a-z0-9-_.]/g, '');
    id=id.replace(/\.{2,}/g, '.')
    id=id.replace(/^\.|\.$/g, '')
    if(id==='') id='a';

    if(id.length>=16){
        id=id.slice(0,15);
        id=id.replace(/\.$/, '')
    }

    while(id.length<3){
        id+=id[id.length-1];
    }

    return id;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"))
console.log(solution('z-+.^.'))
console.log(solution('=.='))
console.log(solution("123_.def"))
console.log(solution("abcdefghijklmn.p"))


//Programmers L1 신규 아이디 추천