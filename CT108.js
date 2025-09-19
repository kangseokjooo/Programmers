class MinHeap{
    constructor(){
        this.heap=[]
    }

    size(){
        return this.heap.length
    }
    peek(){
        return this.heap[0]
    }
    push(v){
        this.heap.push(v)
        this._bu();
    }
    pop(){
        if(this.size()===1) return this.heap.pop();
        const r=this.heap[0];
        this.heap[0]=this.heap.pop();
        this._bd()
        return r;
    }
    _bu(){
        let idx=this.size()-1;
        while(idx>0){
            let p=Math.floor((idx-1)/2)
            if(this.heap[p]<=this.heap[idx]) break;
            [this.heap[p],this.heap[idx]]=[this.heap[idx],this.heap[p]]
            idx=p;
        }
    }
    _bd(){
        let idx=0;
        const length=this.size();
        while(true){
            let l=idx*2+1;
            let r=idx*2+2;
            let s=idx;

            if(l<length && this.heap[l]<this.heap[s]) s=l;
            if(r<length && this.heap[r]<this.heap[s]) s=r;
            if(s === idx) break;

            [this.heap[idx],this.heap[s]]=[this.heap[s],this.heap[idx]]
            idx=s;
        }
    }
}

function solution(scoville, K) {
    const heap=new MinHeap();
    scoville.forEach(v=>heap.push(v))

    let answer=0;
    while(heap.size() >1 && heap.peek()<K){
        const f=heap.pop()
        const s=heap.pop();
        heap.push(f+s*2);
        answer++;
    }
    return heap.peek()>=K ? answer:-1
}

console.log(solution([1, 2, 3, 9, 10, 12],7))

//Programmers L2 더 맵게