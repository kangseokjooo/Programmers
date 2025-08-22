function solution(schedules, timelogs, startday) {
    const n=schedules.length;

    let cnt=0;

    for(let i=0;i<n;i++){
        let schedule=toM(schedules[i]);
        let limit =schedule+10;
        let flag=true;

        for(let j=0;j<7;j++){
            let day=(startday+j-1)%7+1;
            if(day===6||day===7) continue

            let log=toM(timelogs[i][j]);

            if(log>limit){
                flag=false;
                break;
            }
        }
        if(flag) cnt++;
    }
    return cnt;

}

function toM(time){
    const h=Math.floor(time/100)
    const m=time%100;
    return h*60+m;
}

console.log(
  solution(
    [700, 800, 1100],
    [
      [710, 2359, 1050, 700, 650, 631, 659],
      [800, 801, 805, 800, 759, 810, 809],
      [1105, 1001, 1002, 600, 1059, 1001, 1100],
    ],
    5
  )
);

console.log(
  solution(
    [730, 855, 700, 720],
    [
      [710, 700, 650, 735, 700, 931, 912],
      [908, 901, 805, 815, 800, 831, 835],
      [705, 701, 702, 705, 710, 710, 711],
      [707, 731, 859, 913, 934, 931, 905],
    ],
    1
  )
);

//Programmers L1 유연근무제
