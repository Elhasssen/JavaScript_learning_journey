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