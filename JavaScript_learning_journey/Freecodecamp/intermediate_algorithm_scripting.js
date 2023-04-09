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
// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// function myReplace(str, before, after) {
//     // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
//     if (/^[A-Z]/.test(before)) {
//       after = after[0].toUpperCase() + after.substring(1)
//     } else {
//       after = after[0].toLowerCase() + after.substring(1)
//     }
  
//     // return string with argument "before" replaced by argument "after" (with correct case)
//     return str.replace(before, after);
//   }
  
//   console.log(myReplace("I think we should look up there", "up", "Down"));
//--------------------------------------
// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters 
// AT and CG, which form building blocks of the DNA double helix.
// function pairElement(str) {
//     let atgc = {
//       'A' : 'T',
//       'T' : 'A',
//       'G' : 'C',
//       'C' : 'G'
//     }
//     let arr = str.split('')
//     let output = [];
//     arr.map(s => output.push([s,atgc[s]]))
//     return output;
//   }
  
//   console.log(pairElement("GCG"));
//------------------------------------------------------------
// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// function fearNotLetter(str) {
  
//     let code = str.charCodeAt(0)
//     for (let i =0; i < str.length; i++) {
//       if (code != str.charCodeAt(i)){
//         break;
//       }
//       code += 1;
//     } 
//     if (code - 1 == str.charCodeAt(str.length-1)) {
//       return undefined
//     } else {
//       return String.fromCharCode(code);
//     }
    
//   }
  
//   console.log(fearNotLetter("abce"));
  //-----------------------other ways -------------------------------
//   function fearNotLetter(str) {
//     let currCharCode = str.charCodeAt(0);
//     let missing = undefined;
  
//     str
//       .split("")
//       .forEach(letter => {
//         if (letter.charCodeAt(0) === currCharCode) {
//           currCharCode++;
//         } else {
//           missing = String.fromCharCode(currCharCode);
//         }
//       });
  
//     return missing;
//   }
  
//   // test here
//   fearNotLetter("abce");
//-----------------------------------------------------
// sorted union 
// function uniteUnique(arr) {
//   let st = [...arguments]
//   let nw = [];
//   st.map(x=> x.map(y=> nw.push(y)))
//   // for (let i =0; i < arguments.length; i++){
//   //   st.add(...arguments[i])
//   // }
//   let ha = new Set(nw)
//   return [...ha];
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
