function solution(babbling) {
    const arr = ['aya', 'ye', 'woo', 'ma'];
    let cnt = 0;

    for (let word of babbling) {
        let tmp = word;
        let prev = '';  

     
        for (let s of arr) {
            if (tmp.includes(s.repeat(2))) {
                tmp = 'invalid';
                break;
            }
        }

        if (tmp === 'invalid') continue;

        let replace = true;
        while (replace) {
            replace = false;
            for (let s of arr) {
                if (tmp.startsWith(s)) {
                    if (s === prev) {
                        tmp = 'invalid';
                        break;
                    }
                    tmp = tmp.slice(s.length);
                    prev = s;
                    replace = true;
                    break;
                }
            }
        }

        if (tmp === '') cnt++;
    }
    return cnt;
}

console.log(solution(["aya", "yee", "u", "maa"])); 
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); 

//Programmers L1 옹알이(2)
