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
// ---------- other ways ----------------------------
// function uniteUnique(...arr) {
//   return [...new Set(arr.flat())];
// }
//--------------------------------------------------
// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// function convertHTML(str) {
//   let html = {
//     '&' : '&amp;',
//     '>' : '&gt;',
//     '<' : '&lt;',
//     '"' : '&quot;',
//     "'" : '&apos;'
//   }
//   return str.replace(/([&<>\"'])/g, match => html[match]);
//   return res

// }

// console.log(convertHTML("Hamburgers < Pizza < Tacos"));
//-------------------------------------------------------
// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// function sumFibs(num) {
//   let prevNumber = 0;
//   let currNumber = 1;
//   let result = 0;
//   while (currNumber <= num) {
//     if (currNumber % 2 !== 0) {
//       result += currNumber;
//     }
//     currNumber += prevNumber;
//     prevNumber = currNumber - prevNumber;
//   }

//   return result;
// }

passive agressive 
// sumFibs(4);
// ------------------------------------
// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 
// 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is 
// divisible by 1, 2 and 4.
// function sumPrimes(num) {
//   // Helper function to check primality
//   function isPrime(num) {
//     const sqrt = Math.sqrt(num);
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0){return false;}
        
//     }
//     return true;
//   }

//   // Check all numbers for primality
//   let sum = 0;
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i))
//       sum += i;
//   }
//   return sum;
// }

// console.log(sumPrimes(2));
//---------------------------------------
// function smallestCommons(arr) {
//   // Setup
//   const [min, max] = arr.sort((a, b) => a - b);
//   const numberDivisors = max - min + 1;
//   // Largest possible value for SCM
//   let upperBound = 1;
//   for (let i = min; i <= max; i++) {
//     upperBound *= i;
//   }
//   // Test all multiples of 'max'
//   for (let multiple = max; multiple <= upperBound; multiple += max) {
//     // Check if every value in range divides 'multiple'
//     let divisorCount = 0;
//     for (let i = min; i <= max; i++) {
//       // Count divisors
//       if (multiple % i === 0) {
//         divisorCount += 1;
//       }
//     }
//     if (divisorCount === numberDivisors) {
//       return multiple;
//     }
//   }
// }

// smallestCommons([1, 5]);
// -----------------------------
// function dropElements(arr, func) {
//   while (arr.length > 0 && !func(arr[0])) {
//     arr.shift();
//   }
//   return arr;
// }

// // test here
// dropElements([1, 2, 3, 4], function(n) {
//   return n >= 3;
// });
//-------------------------------------
// // steamroller 
// function steamrollArray(arr) {
//   const flattenedArray = [];
//   // Loop over array contents
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       // Recursively flatten entries that are arrays
//       //  and push into the flattenedArray
//       flattenedArray.push(...steamrollArray(arr[i]));
//     } else {
//       // Copy contents that are not arrays
//       flattenedArray.push(arr[i]);
//     }
//   }
//   return flattenedArray;
// };

// // test here
// steamrollArray([1, [2], [3, [[4]]]]);
// -------------------------------------------
// // Intermediate algorithm scripting 
// function binaryAgent(str) {
//   return str.split(' ').map(x=> x = String.fromCharCode(parseInt(x, 2))).join('');
// }

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// ------------------------
// Everything be true 
// function truthCheck(collection, pre) {
//   return collection.every(function (element) {
//     return element.hasOwnProperty(pre) && Boolean(element[pre]);
//   });
// }

// truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
//---------------------
// Arguments Optional
// function addTogether() {
//     const [first, second] = arguments;
//     if (typeof(first) !== "number")
//       return undefined;
//     if (arguments.length === 1)
//       return (second) => addTogether(first, second);
//     if (typeof(second) !== "number")
//       return undefined;
//     return first + second;
//   }
//-----------------------------------
// make a person
// const Person = function(firstAndLast) {
//   let fullName = firstAndLast;

//   this.getFirstName = function() {
//     return fullName.split(" ")[0];
//   };

//   this.getLastName = function() {
//     return fullName.split(" ")[1];
//   };

//   this.getFullName = function() {
//     return fullName;
//   };

//   this.setFirstName = function(name) {
//     fullName = name + " " + fullName.split(" ")[1];
//   };

//   this.setLastName = function(name) {
//     fullName = fullName.split(" ")[0] + " " + name;
//   };

//   this.setFullName = function(name) {
//     fullName = name;
//   };
// };

// const bob = new Person('Bob Ross');
// bob.getFirstName();