const rvr = (arr) =>{
    let ar = [];
    for (let i=arr.length -1; i>=0; i--){
        ar.push(arr[i])
    }
    return ar;
}


function reverseArrayInPlace(array) {
    //iterate thru half of original array
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
      var old = array[i]; //cache original i value
      array[i] = array[array.length - 1 - i]; //set i value to its "opposite" from end of array
      array[array.length - 1 - i] = old; //set "opposite" to be original i value
    }
    return array;
  }

console.log(reverseArrayInPlace([1,2]))