function solution(friends, gifts) {
  const n = friends.length;

  const idx = {};
  friends.forEach((f, i) => (idx[f] = i));

  const gift = Array.from({ length: n }, () => Array(n).fill(0));
  const give = Array(n).fill(0);
  const rec = Array(n).fill(0);

  for (let g of gifts) {
    let [a, b] = g.split(" ");
    let ai = idx[a];
    let bi = idx[b];
    gift[ai][bi]++;
    give[ai]++;
    rec[bi]++;
  }

  const giftIdx = friends.map((_, i) => give[i] - rec[i]);

  const next = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (gift[i][j] > gift[j][i]) {
        next[i]++;
      } else if (gift[i][j] < gift[j][i]) {
        next[j]++;
      } else {
        if (giftIdx[i] > giftIdx[j]) {
          next[i]++;
        } else if (giftIdx[i] < giftIdx[j]) {
          next[j]++;
        }
      }
    }
  }
  
  return Math.max(...next);
}

console.log(
  solution(
    ["muzi", "ryan", "frodo", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "ryan muzi",
      "ryan muzi",
      "ryan muzi",
      "frodo muzi",
      "frodo ryan",
      "neo muzi",
    ]
  )
);

console.log(
  solution(
    ["joy", "brad", "alessandro", "conan", "david"],
    [
      "alessandro brad",
      "alessandro joy",
      "alessandro conan",
      "david alessandro",
      "alessandro david",
    ]
  )
);

console.log(
  solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"])
);

//Programmers L1 가장 많이 받은 선물
