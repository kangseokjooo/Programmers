function solution(s, n) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    //공백일때는 그대로 진행
    if (arr[i] === " ") continue;
    

    let c = arr[i].charCodeAt(0);
    //소문자
    if (c >= 65 && c <= 90) {
      c = ((c - 65 + n) % 26) + 65;
    //대문자
    } else if (c >= 97 && c <= 122) {
      c = ((c - 97 + n) % 26) + 97;
    }

    arr[i] = c;
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      arr[i] = String.fromCharCode(arr[i]);
    }
  }

  return arr.join("");
}

console.log(solution("BCD", 3));

//Programmers L1 시저암호
