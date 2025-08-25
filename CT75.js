function solution(id_list, report, k) {
    const reportSet=new Set(report);

    const reportMap={};
    for(let r of reportSet){
        let [f,t] =r.split(' ');
        if(!reportMap[t]) reportMap[t]=[];
        reportMap[t].push(f);
    }

    const ban=new Set();
    for(let u in reportMap){
        if(reportMap[u].length>=k){
            ban.add(u);
        }
    }

    const cnt={};
    id_list.forEach(i=>(cnt[i]=0));
    
    for(let u of ban){
        for(let r of reportMap[u]){
            cnt[r]++;
        }
    }

    return id_list.map(i=>cnt[i]);
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);

//Programmers L1 신고 결과 받기
