function solution(phone_book) {
    let arr=phone_book;
    
    arr.sort((a,b)=> a.localeCompare(b));
    
   
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1].startsWith(arr[i])){
            return false
        }
    }
    return true;
}

let arr=["119", "97674223", "1195524421"]

console.log(solution(arr));

//전화 번호 목록 Programmers