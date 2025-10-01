function solution(arr) {
    let answer=[0,0];

    function com(x,y,s){
        let f=arr[x][y];
        let same=true;

        for(let i=x;i<x+s;i++){
            for(let j=y;j<y+s;j++){
                if(arr[i][j]!==f){
                    same=false;
                    break;
                }
            }
            if(!same) break;
        }
        if(same){
            answer[f]+=1;
        }else{
            let h=s/2;
            com(x,y,h);
            com(x,y+h,h)
            com(x+h,y,h)
            com(x+h,y+h,h);
        }
    }
    com(0,0,arr.length);
    return answer
}

console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
);
console.group(
  solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ])
);

//Programmers L2 쿼드 압축후 갯수 세기(X)
