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
//--------------------------------------------------
// Copy an Array with the Spread Operator
// ES6's new spread operator allows us to easily copy all of an array's elements, in order, 
// with a simple and highly readable syntax. The spread syntax simply looks like this: ...
// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]. thisArray remains unchanged and 
// thatArray contains the same elements as thisArray.
//-------------------------------------------
// Combine Arrays with the Spread Operator
// we can concatenate arrays, but this only allows us to combine arrays at the end of one, 
// and at the start of another.
// let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
// let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray would have the value 
// ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].
// ---------------------------------------------
// Check For The Presence of an Element With indexOf()
// indexOf() takes an element as a parameter, and when called, it returns the position, or index, 
// of that element, or -1 if the element does not exist on the array.
// let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
// fruits.indexOf('dates');
// fruits.indexOf('oranges');
// fruits.indexOf('pears');
// indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears') returns 1 
// (the first index at which each element exists).
//- ------------------------------------
//Iterate Through All an Array's Items Using For Loops
// JavaScript offers several built in methods that each iterate over arrays in slightly different 
// ways to achieve different results (such as every(), forEach(), map(), etc.), however the 
// technique which is most flexible and offers us the greatest amount of control is a simple for loop.
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
    
//     if (arr[i].indexOf(elem) == -1){
//         newArr.push(arr[i]);
//       }
  
//   } 
//   // Only change code above this line
//   return newArr;
// }
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
//--------------------------------------------------------------------
// Create complex multi-dimensional arrays
//let nestedArray = [
//     ['deep'],
//     [
//       ['deeper'], ['deeper'] 
//     ],
//     [
//       [
//         ['deepest'], ['deepest']
//       ],
//       [
//         [
//           ['deepest-est?']
//         ]
//       ]
//     ]
//   ];
// The deep array is nested 2 levels deep. The deeper arrays are 3 levels deep. 
// The deepest arrays are 4 levels, and the deepest-est? is 5.
// -----------------------
// Add Key-Value Pairs to JavaScript Objects
// const tekkenCharacter = {
//     player: 'Hwoarang',
//     fightingStyle: 'Tae Kwon Doe',
//     human: true
//   };
// tekkenCharacter.origin = 'South Korea';
// tekkenCharacter['hair color'] = 'dyed orange';
// --------------------------------
// Modify an Object Nested Within an Object
// let nestedObject = {
//   id: 28802695164,
//   date: 'December 31, 2016',
//   data: {
//     totalUsers: 99,
//     online: 80,
//     onlineStatus: {
//       active: 67,
//       away: 13,
//       busy: 8
//     }
//   }
// };
// nestedObject.data.onlineStatus.busy = 10;
// -------------------------------------------
// Access Property Names with Bracket Notation
// In the first object challenge we mentioned the use of bracket notation as a way to access property 
// values using the evaluation of a variable. For instance, imagine that our foods object is being 
// used in a program for a supermarket cash register. We have some function that sets the selectedFood 
// and we want to check our foods object for the presence of that food. This might look like:
// let selectedFood = getCurrentFood(scannedItem);
// let inventory = foods[selectedFood];
//------------------------------
// Use the delete Keyword to Remove Object Properties
// delete foods.apples;
// Check if an Object has a Property
// users.hasOwnProperty('Alan');
// 'Alan' in users;
// Both of these would return true.
