function solution(k, score) {
    let hall=[];
    let result=[];

    for(const s of score){
        hall.push(s);
        hall.sort((a,b)=>b-a);
        if(hall.length>k) hall.pop();
        result.push(hall[hall.length-1]);
    }
    return result;
}
let score=[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];
console.log(solution(4,score))

//명예의 전당1 Programmers L-1