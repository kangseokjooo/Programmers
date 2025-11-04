function solution(book_time) {

    const toM=(time)=>{
        const [h,m]=time.split(':').map(Number)
        return h*60+m
    }
      book_time.sort((a, b) => toM(a[0]) - toM(b[0]));

    let room=[]
    for(const [start,end] of book_time){
        const sm=toM(start);
        const em=toM(end)+10;

        let re=false;
        for(let i=0;i<room.length;i++){
            if(room[i]<=sm){
                room[i]=em;
                re=true;
                break;
            }
        }
        if(!re) room.push(em);

        room.sort((a,b)=>a-b);
    }
    return room.length
}

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
console.log(
  solution([
    ["09:10", "10:10"],
    ["10:20", "12:20"],
  ])
);
console.log(
  solution([
    ["10:20", "12:30"],
    ["10:20", "12:30"],
    ["10:20", "12:30"],
  ])
);

//Programmers L2 호텔 대실


