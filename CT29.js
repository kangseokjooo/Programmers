function solution(s){
    let m=new Map();
    let arr=s.toLowerCase().split('');
    for(let i=0;i<arr.length;i++){
        if(arr[i]==='p' || arr[i]==='y'){
            m.set(arr[i], (m.get(arr[i]) || 0) + 1);
        }
    }

    if(m.get('p')===m.get('y') ||(m.get('p')===0 && m.get('y')===0)){
        return true;
    }else{
        return false
    }
    
}

console.log(solution("pPoooyY"));

//Programmers L1 문자열 내 p와 y의 개수