function solution(m, n, board) {
  board = board.map((r) => r.split(""));
  let answer = 0;
  while (true) {
    let remove = Array.from(Array(m), () => Array(n).fill(false));
    let f = false;

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let cur = board[i][j];
        if (
          cur !== "." &&
          cur === board[i][j + 1] &&
          cur === board[i + 1][j] &&
          cur === board[i + 1][j + 1]
        ) {
          remove[i][j] = true;
          remove[i][j + 1] = true;
          remove[i + 1][j] = true;
          remove[i + 1][j + 1] = true;
          f = true;
        }
      }
    }
    if (!f) break;

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (remove[i][j]) {
          board[i][j] = ".";
          answer++;
        }
      }
    }
    for (let j = 0; j < n; j++) {
      let e = m - 1;
      for (let i = m - 1; i >= 0; i--) {
        if (board[i][j] !== ".") {
          let tmp = board[i][j];
          board[i][j] = ".";
          board[e][j] = tmp;
          e--;
        }
      }
    }
  }
  return answer;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
);


//Programmers L2 프렌즈4블록(X)
