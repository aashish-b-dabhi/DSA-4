class queue {
    constructor() {
        this.arr = []
        this.size = 5
    }

    push(element) {
        if (this.arr.length < this.size){
            this.arr.push(element)
        }
        else{
            console.log("overFlow");
        }
    }

    remove(index){
        for (let i = index; i < this.arr.length; i++) {            
            this.arr[i]  = this.arr[i+1]
        }
        this.arr.length = this.arr.length-1
    }

    addElement(value,index){
        for (let i = (this.arr.length -1); i >=index; i--) {
            
            this.arr[i+1] = this.arr[i]
        }
        this.arr[index] = value

        console.log(this.arr);
    }

    travel(){
        if (this.arr.length!==0) {
            this.arr.map((val,index)=>{
                console.log(val);
            })
        }        
    }
}


let s1 = new queue()
s1.push(19)
s1.push(79)
s1.push(23)
s1.push(43)
s1.push(3)

s1.remove(2)
s1.addElement(65,2)

s1.travel()