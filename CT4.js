function solution(players,calling){
    
    const pos=new Map();
    
    players.forEach((name, idx) => pos.set(name, idx));

    for(let c of calling){
        const idx=pos.get(c);

        if(idx>0){
            const front=players[idx-1];
            
            [players[idx-1],players[idx]]=[players[idx],players[idx-1]];

            pos.set(c,idx-1);
            pos.set(front,idx);
           
        }
        
    }
    return players

}

let p=["mumu", "soe", "poe", "kai", "mine"]
let c=["kai", "kai", "mine", "mine"]

console.log(solution(p,c));

//달리기 경주 Programmers L-1