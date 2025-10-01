function solution(numbers) {
  return numbers.map(x => {
    let a=BigInt(x);
    if((a& 1n)===0n){
        return Number(a+1n);
    }else{
        return Number(a + 1n + ((a ^ (a + 1n)) >> 2n));
    }
  });
}


console.log(solution([2, 7]));

//Programmers L2 2개 이하로 다른 비트
