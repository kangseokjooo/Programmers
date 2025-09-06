function solution(want, number, discount) {
    let answer=0;

    const wantMap={};
    for(let i=0;i<want.length;i++){
        wantMap[want[i]]=number[i];
    }
    for(let i=0;i<=discount.length-10;i++){
        const windowMap={}
        for(let j=i;j<i+10;j++){
            windowMap[discount[j]]=(windowMap[discount[j]]|| 0)+1;
        }
        let flag=true;
        for(let key of want){
            if(windowMap[key]!==wantMap[key]){
                flag=false
                break;
            }
        }
        if(flag) answer++;
    }
    return answer
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);

//Programmers L2 할인 행사
