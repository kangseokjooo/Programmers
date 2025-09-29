function solution(files) {
    return files.sort((a,b)=>{
        const r=/^([a-zA-Z\s\.\-]+)([0-9]{1,5})(.*)$/
        const [,hA,nA]=a.match(r)
        const [,hB,nB]=b.match(r);

        const head=hA.toLowerCase().localeCompare(hB.toLowerCase());

        if(head!==0) return head;

        const number=parseInt(nA,10)-parseInt(nB,10);
        if(number!==0) return number

        return 0;
    })

}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);

console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);

//Programmers L2 파일명 정렬
