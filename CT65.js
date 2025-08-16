function solution(ingredient) {
    let cnt=0;
    let i=0

    while(i<=ingredient.length -4){
        if(ingredient.slice(i,i+4).join('')==='1231'){
            ingredient.splice(i,4);
            cnt++;
            i=Math.max(i-3,0);
        }else{
            i++;
        }
    }
    return cnt;
}


console.log(solution([2,1,1,2,3,1,2,3,1]))
console.log(solution([1,3,2,1,2,1,3,1,2]))


//Programmers L1 햄버거 만들기


