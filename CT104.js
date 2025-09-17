function solution(dirs) {
   let x=0,y=0;

   const visited=new Set();

   const move={
    U:[0,1],
    D:[0,-1],
    R:[1,0],
    L:[-1,0]
   }

   for(let dir of dirs){
    let [dx,dy]=move[dir];
    let nx=x+dx;
    let ny=y+dy;

    if(nx<-5 || nx>5 || ny<-5 || ny>5)continue;

    let path = `${x},${y}->${nx},${ny}`;
    let rPath = `${nx},${ny}->${x},${y}`;
    visited.add(path);
    visited.add(rPath);

    x=nx
    y=ny;
   }
   return visited.size/2
}

console.log(solution("ULURRDLLU")); 
console.log(solution("LULLLLLLU")); 

//Programmers L2 방문길이