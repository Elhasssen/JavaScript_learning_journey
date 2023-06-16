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



console.log(ha.has(1))


export {Group};