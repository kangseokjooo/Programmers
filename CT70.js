function solution(wallpaper) {
    let lux=wallpaper.length,luy=wallpaper[0].length;
    let rdx=0,rdy=0

    for(let i=0;i<wallpaper.length;i++){
        for(let j=0;j<wallpaper[i].length;j++){
            if(wallpaper[i][j]==='#'){
                lux=Math.min(lux,i);
                luy=Math.min(luy,j);
                rdx=Math.max(rdx,i);
                rdy=Math.max(rdy,j);
            }
        }
    }
    return [lux,luy,rdx+1,rdy+1];
}

console.log(solution([".#...", "..#..", "...#."]))
console.log(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."]))
console.log(solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]))
console.log(solution(["..", "#."]))


//Programmers L1 바탕화면 정리

