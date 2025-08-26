function solution(video_len, pos, op_start, op_end, commands) {
    const toS=(t)=>{
        let [m,s]=t.split(':').map(Number);
        return m*60+s;
    }

    const toT=(sec)=>{
        let m=Math.floor(sec/60);
        let s=sec%60;
        return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

    }

    let video=toS(video_len)
    let cur=toS(pos);
    let opS=toS(op_start);
    let opE=toS(op_end);

    if(cur>=opS && cur<=opE) cur=opE;

    for(let c of commands){
        if(c==='prev'){
            cur=Math.max(0,cur-10);
        }else if(c==='next'){
            cur=Math.min(video,cur+10);
        }

        if(cur>=opS && cur<=opE){
            cur=opE;
        }
    }
    return toT(cur);
}

console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"]));
console.log(
  solution("10:55", "00:05", "00:15", "06:55",["prev", "next", "next"])
);

//Progrmmers L1 동영상 재생기
