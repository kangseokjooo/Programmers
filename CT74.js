function solution(bandage, health, attacks) {
    const [t,x,y] =bandage;
    let cur=health;
    let st=0;

    let lt=attacks[attacks.length-1][0];
    let atMap=new Map(attacks);

    for(let i=1;i<=lt;i++){
        if(atMap.has(i)){
            cur-=atMap.get(i);
            st=0;
            if(cur<=0) return -1;
        }else{
            cur+=x;
            st++;
            if(st===t){
                cur+=y;
                st=0;
            }
            if(cur>health) cur=health;
        }
    }
    return cur;
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
);
console.log(
  solution([3, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
);

console.log(
  solution([4, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
);
console.log(
  solution([1, 1, 1], 5, [
    [1, 2],
    [3, 2],
  ])
);

//Programmers L1 붕대 감기
