//// Interators
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

    [Symbol.iterator](){
        return new GroupIterator(this)
    }
} 

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.postion = 0
    }

    next (){
        if (this.postion >= this.group.arr.length){
            return {done: true};
        } else {
            let result = {
                value : this.group.arr[this.postion],
                done : false
            };
            this.postion++;
            return result
        }
    }
}

for (let v of Group.from([1,2,3])) {
    console.log(v)
}