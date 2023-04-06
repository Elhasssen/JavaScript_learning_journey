// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of 
// all the numbers between them. The lowest number will not always come first.
// function sumAll(arr) {
//     let max = Math.max(...arr);
//     let min = Math.min(...arr);
//     let sum = 0;
//     while (max >= min){
//       sum = sum + max;
//       max = max - 1;
//     }
//     return sum;
//   }
  
//   console.log(sumAll([1, 4]));
// ------------------------------------------------
// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, 
// but not both. In other words, return the symmetric difference of the two arrays.
// function diffArray(arr1, arr2) {
//     return arr1
//       .concat(arr2)
//       .filter(item => !arr1.includes(item)|| !arr2.includes(item)) ;
//   }
  
//   console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4,5]));
//----------------------------------------------------------
// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed 
// by one or more arguments. Remove all elements from the initial array that are of the same value 
// as these arguments.
// Note: You have to use the arguments object.
// function destroyer(arr) {
//     let newWbefore = [...arr];
//     for (let i = 1 ; i < arr.length ; i++){
//       newWbefore = arr.filter(x=> x != arguments[i])
//     }
    
//     return newWbefore;
//   }
  
//   console.log(destroyer([ 1,2, 3, 1, 2, 3], 2, 3));
// -----------------------------------------------------
