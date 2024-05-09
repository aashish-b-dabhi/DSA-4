class stack {

    constructor() {
        this.arr = []
        this.secondArray = []
    }

    IsUnderflow() {
        if (this.arr.length == 0) {
            console.log("underflow");
        }
    }

    IsOverFlow() {
        if (this.arr.length > 5) {
            console.log("overflow");
        }
    }

    push(element) {
        this.arr.push(element)
    }

    travel() {
        this.arr.map((val, ind) => {
            console.log(val);
        })
    }

    reverse() {
        console.log("Reverse Array");
        for (let i = 0; i < this.arr.length; i++) {
            this.secondArray[i] = this.arr[this.arr.length - 1 - i]
        }

        console.log(this.secondArray);
    }

    lastElement() {
        console.log("Last Element");
        console.log(this.arr[0]);
    }

    firstElement() {
        console.log("First Element");
        console.log(this.arr[this.arr.length - 1]);
    }

    lastSecond() {
        console.log("lastSecond Element");
        console.log(this.arr[1]);
    }
}

let s1 = new stack();
s1.IsUnderflow();
s1.push(27);
s1.push(89);
s1.push(63);
s1.push(36);
s1.push(19);
s1.IsOverFlow();
s1.travel();
s1.lastElement()
s1.firstElement()
s1.lastSecond()
s1.reverse()
