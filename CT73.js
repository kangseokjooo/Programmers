function solution(park, routes) {
  const H = park.length;
  const W = park[0].length;

  let x = 0,
    y = 0;

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (park[i][j] === "S") {
        x = i;
        y = j;
      }
    }
  }
  const dir = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };
  for (let r of routes) {
    let [o, n] = r.split(" ");
    n = parseInt(n);

    let dx = dir[o][0];
    let dy = dir[o][1];

    let nx = x;
    let ny = y;

    let valid = true;

    for (let k = 0; k < n; k++) {
      nx += dx;
      ny += dy;

      if (nx < 0 || nx >= H || ny < 0 || ny >= W) {
        valid = false;
        break;
      }
      if (park[nx][ny] === "X") {
        valid = false;
        break;
      }
    }
    if (valid) {
      x = nx;
      y = ny;
    }
  }
  return [x, y];
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));

//Progrmmers L1 공원 산책
