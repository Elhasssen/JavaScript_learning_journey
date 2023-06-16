class Group{
    constructor(){
        this.arr = [];
    }

    add(val){
        if (!this.has(val)){
            this.arr.push(val)
        }
    }
    delete(val){
        this.arr = this.arr.filter(x => x != val);
    }
    static from(input){
        let group = new Group;
        for (let v of input){
            group.add(v);
        }
        return group
    }
    has(value){
        return this.arr.includes(value)
    }

}

let ha =  Group.from([1,2,3]);


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}

