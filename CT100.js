function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const q = [[0, 0, 1]]; //x,t,dist

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[0][0] = true;

  while (q.length > 0) {
    const [x, y, dist] = q.shift();

    if (x === n - 1 && y === m - 1) {
      return dist;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        if (maps[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          q.push([nx, ny, dist + 1]);
        }
      }
    }
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);

//Programmers L2 게임 맵 최대 거리
