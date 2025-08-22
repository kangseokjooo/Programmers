function solution(today, terms, privacies) {
    const days=toDays(today);

    const map={};

    terms.forEach((t)=>{
        let [type,month]=t.split(" ");
        map[type]=parseInt(month);
    })

    const answer=[]

    privacies.forEach((p,idx)=>{
        let [date,type]=p.split(" ");
        let sd=toDays(date);

        let expire=sd+map[type]*28-1;

        if(expire<days){
            answer.push(idx+1);
        }
    })
    
    return answer

}

function toDays(str){
    let [y,m,d]=str.split('.').map(Number);
    return y*12*28+m*28+d;
}




console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);

//Programmers L1 개인정보 수집 유효 기간
