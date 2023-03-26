// Use an Array to Store a Collection of Data
// All arrays have a length property, which as shown above, can be very easily accessed with the 
// syntax Array.length. A more complex implementation of an array can be seen below. This is 
// known as a multi-dimensional array, or an array that contains other arrays. Notice that this 
// array also contains JavaScript objects, which we will examine very closely in our next section, 
// but for now, all you need to know is that arrays are also capable of storing complex objects.
// let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray.length);
// ----------------------------------------------
// Access an Array's Contents Using Bracket Notation
// The fundamental feature of any data structure is, of course, the ability to not only store data, 
// but to be able to retrieve that data on command. So, now that we've learned how to create an array, 
// let's begin to think about how we can access that array's information.
// let ourArray = ["a", "b", "c"];
// ourArray[1] = "not b anymore";
// Using bracket notation, we have now reset the item at index 1 from the string b, to not b anymore. 
// Now ourArray is ["a", "not b anymore", "c"].
// -------------------------------------
// Add Items to an Array with push() and unshift()
// Both methods take one or more elements as parameters and add those elements to the array the method 
// is being called on; the push() method adds elements to the end of an array, and unshift() adds 
// elements to the beginning.
// --------------------------------------
// Remove Items from an Array with pop() and shift()
//  pop() removes an element from the end of an array, 
// while shift() removes an element from the beginning. 
// function popShift(arr) {
//   let popped = arr.pop(); // Change this line
//   let shifted = arr.shift(); // Change this line
//   return [shifted, popped];
// }

// console.log(popShift(['challenge', 'is', 'not', 'complete']));
// ---------------------------------------
// Remove Items Using splice()
// splice()'s first parameter represents the index on the array from which to begin removing elements, 
// while the second parameter indicates the number of elements to delete
// let array = ['today', 'was', 'not', 'so', 'great'];
// array.splice(2, 2);
// Here we remove 2 elements, beginning with the third element (at index 2). array would have the 
// value ['today', 'was', 'great'].
//---------------------------------------------
// Add Items Using splice()
// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;
// numbers.splice(startIndex, amountToDelete, 13, 14);
// console.log(numbers);
// The second occurrence of 12 is removed, and we add 13 and 14 at the same index. 
// The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].
//--------------------------------
// Copy Array Items Using slice()
// slice() takes only 2 parameters — the first is the index at which to begin extraction, 
// and the second is the index at which to stop extraction (extraction will occur up to, 
// but not including the element at this index). 
// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
// let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather would have the value ['snow', 'sleet'],
