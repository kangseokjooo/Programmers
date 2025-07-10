function solution(arr1,arr2){
    const n=arr1.length;
    const m=arr1[0].length;
    const p=arr2[0].length;

    const result=Array.from({length:n},()=>Array(p).fill(0));

    for(let i=0;i<n;i++){
        for(let j=0;j<p;j++){
            for(let k=0;k<m;k++){
                result[i][j]+=arr1[i][k]*arr2[k][j];
            }
        }
    }
    return result
}

const arr1 =[[1, 4], [3, 2], [4, 1]]

  const arr2=	[[3, 3], [3, 3]]

  console.log(solution(arr1,arr2));