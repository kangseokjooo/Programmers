function make(str){
    let arr=[]
    str=str.toLowerCase();
    for(let i=0;i<str.length-1;i++){
        let a=str[i],b=str[i+1];
        if(/[a-z]/.test(a) && /[a-z]/.test(b)){
            arr.push(a+b);
        }
    }
    return arr
}
function solution(str1, str2) {
   let arr1=make(str1);
   let arr2=make(str2)

   let m1=new Map()
   let m2=new Map()

   for(let s of arr1) m1.set(s,(m1.get(s)||0)+1);
    for (let s of arr2) m2.set(s, (m2.get(s) || 0) + 1);

    let inter=0;
    let uni=0;
    let ak=new Set([...m1.keys(),...m2.keys()])

    for(let k of ak){
        let c1=m1.get(k)||0;
        let c2=m2.get(k)||0;

        inter+=Math.min(c1,c2);
        uni+=Math.max(c1,c2);
    }
    let j=uni===0 ? 1 : inter/uni;
    return Math.floor(j*65536)
}

console.log(solution("FRANCE","french"))
console.log(solution("handshake","shake hands"))
console.log(solution("aa1+aa2","AAAA12"))
console.log(solution("E=M*C^2","e=m*c^2"))

//Programmers L2 뉴스 클러스터링(x)