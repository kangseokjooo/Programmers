function solution(numbers, hand) {
   const pos = {
        1:[0,0], 2:[0,1], 3:[0,2],
        4:[1,0], 5:[1,1], 6:[1,2],
        7:[2,0], 8:[2,1], 9:[2,2],
        '*':[3,0], 0:[3,1], '#':[3,2]
    };

    let l=pos['*']
    let r=pos['#']

    let answer='';

    for(let n of numbers){
        if([1,4,7].includes(n)){
            answer+='L'
            l=pos[n];
        }else if([3,6,9].includes(n)){
            answer+='R';
            r=pos[n];
        }else{
            let t=pos[n];
            let ld=Math.abs(l[0]-t[0])+Math.abs(l[1]-t[1])
            let rd=Math.abs(r[0]-t[0])+Math.abs(r[1]-t[1])

            if(ld<rd){
                answer+='L';
                l=t;
            }else if(rd<ld){
                answer+='R'
                r=t
            }else{
                if(hand==='right'){
                    answer+='R';
                    r=t
                }else{
                    answer+='L'
                    l=t
                }
            }
        }
    }
    return answer
}


console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],'right'))
console.log(solution([7,0,8,2,8,3,1,5,7,6,2],"left"))
console.log(solution([1,2,3,4,5,6,7,8,9,0],'right'))

//Programmers L1 키패드 누르기