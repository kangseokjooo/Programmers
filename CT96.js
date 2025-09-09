function solution(cacheSize, cities) {
    if(cacheSize===0) return cities.length*5

    let cache=[];
    let answer=0;

    for(let city of cities){
        city=city.toLowerCase();

        let i=cache.indexOf(city);

        if(i!==-1){
            cache.splice(i,1);
            cache.push(city)
            answer+=1
        }else{
            if(cache.length>=cacheSize){
                cache.shift();
            }
            cache.push(city);
            answer+=5
        }
    }
    return answer
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
);
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
);
console.log(
  solution(2, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));

//Programmers L2 [1차]캐시
