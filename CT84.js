function solution(brown, yellow) {
    const total=brown+yellow

    for(let h=3;h<=total;h++){
        if(total % h===0){
            let w=total/h;
            if(w>=h){
                if((w-2)*(h-2)===yellow){
                    return [w,h];
                }

            }
        }
    }
}

console.log(solution(10,2));
console.log(solution(8,1));
console.log(solution(24,24))

//Programmers L2 카펫