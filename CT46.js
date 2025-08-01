function solution(name,yearning,photo){
    let map={}
    name.forEach((n,i)=>{
        map[n]=yearning[i];
    })
    let arr=[];
    let sum=0
    for(let i=0;i<photo.length;i++){
        for(let j=0;j<photo[i].length;j++){
            for(let [k,v] of Object.entries(map)){
                if(photo[i][j]===k){
                    sum+=v
                }
                
            }
            
        }
        arr.push(sum);
        sum=0;
    }
    return arr
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
  )
)



console.log(
  solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]
  )
); 



console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
  )
);

//Programmers L1 추억 점수
