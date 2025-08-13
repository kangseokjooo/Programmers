function solution(s, skip, index) {
    const alphabet=Array.from({length:26},(_,i)=>String.fromCharCode(97+i));
    const arr=alphabet.filter(a=>!skip.includes(a));

    let answer='';
    for(let c of s){
        let cur=arr.indexOf(c);
        let newIdx=(cur+index) % arr.length;
        answer+=arr[newIdx];
    }
    return answer;
    
}

console.log(solution("aukks", "wbqd", 5));

//Programmers L1 둘만의 암호