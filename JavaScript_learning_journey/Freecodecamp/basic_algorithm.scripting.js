// Convert Celsius to Fahrenheitfunction 
// convertCtoF(celsius) {
//     let fahrenheit = celsius* 9/5 + 32;
//     return fahrenheit ;
//   }
  
//   convertCtoF(30);
// -----------------------------------
// Reverse a String
// function reverseString(str) {
//     let nStr = '';
//     for (let i = str.length - 1; i >=  0; i --){
//       nStr += str[i];
//     }
//     return nStr;
//   }
  
//   console.log(reverseString("hello"))
//-----------------------------
// Factorialize a Number
// function factorialize(num) {
//     let fact = 1;
//     for (let i = num - 1; i >= 0; i--){
//       fact *= num;
//       num--;
//     }
//     return fact;
//   }
//   console.log(factorialize(5));
//   factorialize(5);
// -----------------------------
// Find the Longest Word in a String
// function findLongestWordLength(str) {
//     let words = str.split(' ');
//     let maxLength = words[0].length;
//     for (let i = 1 ; i<= words.length - 1; i++){
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//       } 
//     }
//     return maxLength;
//   }
//   console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
//   findLongestWordLength("The quick brown fox jumped over the lazy dog");
// ----------------------------------------------
// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, 
// the provided array will contain exactly 4 sub-arrays.
// function largestOfFour(arr) {
//     const maxArr = [];
//     for (let i =0; i < arr.length; i++)
//     {
//       let max = arr[i][0];
//       for (let j = 1; j < arr[i].length; j++){
//         if (arr[i][j] > max){
//           max = arr[i][j];
//         }
//       }
//       maxArr.push(max);
//     }
//     return maxArr;
//   }
  
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);*
// ------------------------------------------------
// confirm the ending 
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// function confirmEnding(str, target) {
//     if (str.slice(str.length - target.length) === target){
//       return true;
//     } else {
//       return false;
//     }
  
//   }
// confirmEnding("Bastian", "n");
//-------------------------------------------
// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number.
// function repeatStringNumTimes(str, num) {
//     let newStr = '';
//     for (let i =0; i<= num - 1; i++){
//       newStr += str
//     }
//     return newStr;
//   }
  
//   console.log(repeatStringNumTimes("abc", 3))
//------------------------------------------------
// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string 
// length (second argument). Return the truncated string with a ... ending.
// function truncateString(str, num) {
//     if (str.length > num){
//       return str.slice(0,num) + "..."
//     }
//     return str;
//   }
  
// truncateString("A-tisket a-tasket A green and yellow basket", 8);
// --------------------------------------



