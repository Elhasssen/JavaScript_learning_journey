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
// ------------------other ways ---------------------
// function destroyer(arr) {
//     const valsToRemove = Array.from(arguments).slice(1);
//     return arr.filter(function(val) {
//       return !valsToRemove.includes(val);
//     });
//   }
//   Declare a variable named valsToRemove and set it equal to a new Array object from() the arguments 
//   passed into the function. Use the slice() method on the array of arguments, starting from the 
//   second index, 1.
//   Return the filtered array, using includes() in the callback function to check if val is not 
//   in valsToRemove; returning true to keep the value in the original array or false to remove it.  
// // ----------------- other ways -----------------------
// function destroyer(arr, ...valsToRemove) {
//     return arr.filter(elem => !valsToRemove.includes(elem));
//   }
//   Using spread operator to retrieve the arguments.
// Return the filtered array, using includes()
// -----------------------------------------------------
// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all 
// objects that have matching name and value pairs (second argument). Each name and value pair of the 
// source object has to be present in the object from the collection if it is to be included in the 
// returned array.
// function whatIsInAName(collection, source) {
//     const sourceKeys = Object.keys(source);
//     return collection.filter(obj => {
//       for (let i = 0; i < sourceKeys.length; i++) {
//         if (!obj.hasOwnProperty(sourceKeys[i]) ||
//             obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
//           return false;
//         }
//       }
//       return true;
//     });
//   }
  
//   console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//----------------------------------
// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// function spinalCase(str) {
//     return str.split(/\s|_|(?=[A-Z])/);
//   }
  
// console.log(spinalCase('thisIsSpinalTap'));
//-----------------------------------------
// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, 
// move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
// function translatePigLatin(str) {
//     let consonantRegex = /^[^aeiou]+/;
//     let myConsonants = str.match(consonantRegex);
//     return myConsonants != null
//       ? str
//           .replace(consonantRegex, "")
//           .concat(myConsonants)
//           .concat("ay")
//       : str.concat("way");
//   }
  
//   translatePigLatin("consonant");
//--------------------------------
