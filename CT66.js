function solution(board,moves){
    let stack=[]
    let remove=0;

    for(let m of moves){
        let col=m-1;
        for(let row=0;row<board.length;row++){
            if(board[row][col]!==0){
                let doll=board[row][col];
                board[row][col]=0;

                if(stack.length>0 && stack[stack.length-1]===doll){
                    stack.pop();
                    remove+=2
                }else{
                    stack.push(doll)
                }
                break
            }
        }
    }
    return remove;
}


console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]))

//Programmers L1 크레인 인형뽑기