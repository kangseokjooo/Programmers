function solution(fees, records) {
  const [bt, bf, ut, uf] = fees;

  const map = new Map();
  const tmap = new Map();

  function toM(time) {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  }
  for (let r of records) {
    const [tStr, car, type] = r.split(" ");
    const time = toM(tStr);

    if (type === "IN") {
      map.set(car, time);
    } else {
      const inTime = map.get(car);
      const used = time - inTime;
      tmap.set(car, (tmap.get(car) || 0) + used);
      map.delete(car);
    }
  }
  for (let [car, inTime] of map) {
    const used = toM("23:59") - inTime;
    tmap.set(car, (tmap.get(car) || 0) + used);
  }
  function calF(time) {
    if (time <= bt) return bf;
    return bf + Math.ceil((time - bt) / ut) * uf;
  }
  return [...tmap.keys()]
    .sort((a, b) => a.localeCompare(b))
    .map((c) => calF(tmap.get(c)));
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
console.log(
  solution(
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ]
  )
);
console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));

//Programmers L2 주차요금계산 X