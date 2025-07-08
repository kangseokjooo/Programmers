function solution(skill, skill_trees) {
    let answer=0;
    for(let t of skill_trees){
        const filter=[...t].filter(r=>skill.includes(r)).join('');

        if(skill.startsWith(filter)){
            answer++;
        }
    }
    return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));


//스킬트리 Programmers L2