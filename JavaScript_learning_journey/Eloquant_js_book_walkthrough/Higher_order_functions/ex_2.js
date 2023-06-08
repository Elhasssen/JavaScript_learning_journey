const every = (arr, func) => {
    for (let i =0 ; i< arr.length; i++) {
        if (func(arr[i]) == false) {
            return false;
        }  
    }   return true;
}

const every_some = (arr, func) => { 
    return !arr.some(elm => !func(elm));
}

console.log(every_some([0,4,7,8], x => x % 2 == 0))
console.log(every_some([0,4,6,8], x => x % 2 == 0))