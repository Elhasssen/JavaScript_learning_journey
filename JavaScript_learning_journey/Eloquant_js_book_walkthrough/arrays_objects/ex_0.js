const rng = (a,b,n) => {
    let arr = [];
    for (let i = a ;i<=b; i+=n){
        arr.push(i);
    }
    return arr;
}

const sum = (ar) => {
    let count = 0;
    for (let i = 0 ;i<ar.length; i++){
        count = count + ar[i];
    }
    return count;
}

console.log(rng(1,10))
// const arrayy = rng(1,10)
// console.log(sum(arrayy))