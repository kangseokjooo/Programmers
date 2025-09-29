function solution(record) {
    const nickname={}
    const info=[];

    for(let r of record){
        const [cmd,uid,name]=r.split(' ');
        if(cmd==='Enter'){
            nickname[uid]=name
            info.push([uid,'enter'])
        }else if(cmd==='Leave'){
            info.push([uid,'leave'])
        }else if(cmd==='Change'){
            nickname[uid]=name;
        }
    }
    return info.map(([uid,info])=>{
        const name=nickname[uid]
        if(info==='enter') return `${name}님이 들어왔습니다.`
        else return `${name}님이 나갔습니다.`
    })
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);

//Programmers L2 오픈채팅방(X)
