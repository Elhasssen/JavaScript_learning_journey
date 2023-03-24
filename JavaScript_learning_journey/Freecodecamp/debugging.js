// Use the JavaScript Console to Check the Value of a Variable
// The console.log() method, which "prints" the output of what's within its parentheses to the 
// console, will likely be the most helpful debugging tool. Placing it at strategic points in your 
// code can show you the intermediate values of variables. It's good practice to have an idea of 
// what the output should be before looking at what it is. Having check points to see the status of 
// your calculations throughout your code will help narrow down where the problem is.
// console.log('Hello world!');
// ------------------------------
// Understanding the Differences between the freeCodeCamp and Browser Console
//  There are many methods to use with console to output messages. log, warn, and clear to name a few.
// The freeCodeCamp console will only output log messages, while the browser console will output all 
// messages. When you make changes to your code, it will automatically run and show the logs. The 
// freeCodeCamp console is then cleared each time your code runs.
//------------------------------------------------
// Use typeof to Check the Type of a Variable
// You can use typeof to check the data structure, or type, of a variable. 
// This is useful in debugging when working with multiple data types. 
// console.log(typeof "");
// console.log(typeof 0);
// console.log(typeof []);
// console.log(typeof {});
// JavaScript recognizes seven primitive (immutable) data types: 
// $Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020), 
// and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of 
// object.
//-------------------------------------------------------
//Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, 
// and quotes have a closing pair.f
// Catch Mixed Usage of Single and Double Quotes.
// it is okay to use only one style of quotes. You can escape the quotes inside the string by 
// using the backslash (\) escape character:
//--------------------------------
// catching atch Use of Assignment Operator Instead of Equality Operator
//---------------------------------------------------------
// Catch Missing Open and Closing Parenthesis After a Function Call:
// function myFunction() {
//   return "You rock!";
// }
// let varOne = myFunction;
// let varTwo = myFunction();
// Here varOne is the function myFunction, and varTwo is the string You rock!.
// -----------------------------
// Catch Arguments Passed in the Wrong Order When Calling a Function.
//  the next bug to watch out for is when a function's arguments are supplied in the incorrect 
// order. If the arguments are different types, such as a function expecting an array and an integer, 
// this will likely throw a runtime error.
//---------------------------------------
// Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of 
// a string or array (to slice or access a segment), or when looping over the indices of them. 
// JavaScript indexing starts at zero, not one, which means the last index is always one less than 
// the length of the item. If you try to access an index equal to the length, the program may throw 
// an "index out of range" reference error or print undefined.
//--------------------------------------
// Use Caution When Reinitializing Variables Inside a Loop
// sometimes it's necessary to save information, increment counters, or re-set variables within a loop. 
// A potential issue is when variables either should be reinitialized, and aren't, or vice versa. 
// This is particularly dangerous if you accidentally reset the variable being used for the terminal 
// condition, causing an infinite loop.
// Printing variable values with each cycle of your loop by using console.log() can uncover buggy 
// behavior related to resetting, or failing to reset a variable.
