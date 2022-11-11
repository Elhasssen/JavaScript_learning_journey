// Compare scopes of the var and let keywords
// when you declare a variable with the var keyword, it is declared globally
// or locally if declared inside a function
// the let keyword behaves similarly, but with some extra features, when 
// you declare a variable with let keyword inside a block, statement or expression
// its scope is limited to that bloc, statement, or expression.
// for example : 
var numArray = [];
for (var i=0; i < 3; i++){
    numArray.push(i);
}
console.log(numArray);
console.log(i);
// Here the console will display the values [0,1.2] and 3

