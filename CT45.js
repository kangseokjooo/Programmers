function solution(card1, card2, goal) {
    let i=0;
    let j=0;
    for(let w of goal){
        if(w===card1[i]){
            i++
        }else if(w===card2[j]){
            j++;
        }else{
            return "No"
        }
    }
    return "Yes"

}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
//Yes

console.log(
    solution(
    ["i","water","drink"],
    ["want","to"],
    ["i","want","to","drink","water"]
    )
)

//No

//Programmers L1 카드 뭉치