// Regulat Expresions
// JavaScript has multiple ways to use regexes. One way to test a regex 
// is using the .test() method. The .test() method takes the regex,
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); // Change this line
// the test ;ethod here returns true
//-------------------------------------
// Match literal strings
// n the last challenge, you searched for the word Hello using the regular expression /Hello/.
// That regex searched for a literal match of the string Hello. Here's another example searching 
// for a literal match of the string Kevin:
// let testStr = "Hello, my name is Kevin.";
// let testRegex = /Kevin/;
// testRegex.test(testStr);
// this test will retrun True
// match a literal string with differenet ^possibilities 
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);
// using "|" the alternation operator
// ------------------------
// igonre a case while matching
// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; // Change this line
// let result = fccRegex.test(myString);
//------------------------------------------
// Extracting matches 
// you have only been checking if a pattern exists or not within a string. You can also 
// extract the actual matches you found with the .match() method.
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line
//-------------------------------------------
// Finding more than the first match
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// using the global search 'g' and igonoring the case with 'i'
//---------------------------------------------------------
// match anything with wildcard period 
// // let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un./; // Change this line
// let result = unRegex.test(exampleStr);
// this will match word like, sun, run, nun, fun
//----------------------------
// Match single chartcher with multiple possibilities 
// You can search for a literal pattern with some flexibility with character classes. 
// Character classes allow you to define a group of characters you wish to match by placing 
// them inside square ([ and ]) brackets.
// in this example we want to match all the vowels inside this string 
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// so we put the class of all the vowels wanted to be matched, by ignoring the case by 'i' and searching more tha
// than on match using the global match 'g' 
// let vowelRegex = /[aeiou]/ig; // Change this line
// let result = quoteSample.match(vowelRegex); 
// console.log(result);// Change this line
// -----------------------------------
// match Letters of the alphabet
// Inside a character set, you can define a range of 
// characters to match using a hyphen character: -.
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line
// this will match all the alphabets with uppercase aswell 
// and will match more than one match
//--------------------------------------------------------
// match numbers and letters of the alphabet
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; // Change this line
// let result = quoteSample.match(myRegex);
// -----------------------------------------
// Match single characters not specified 
// To create a negated character set, you place a caret character (^) after the opening bracket 
// and before the characters you do not want to match.
// let quoteSample = "6 abs";
// let myRegex = /[^aeiou0-5]/ig; // Change this line
// let result = quoteSample.match(myRegex);
// console.log(result) // Change this line
// --------------------------------
// Match characters that occur one or more times 
// You can use the + character to check if that is the case. Remember, 
// the character or pattern has to be present consecutively. That is, 
// the character has to repeat one after the other.
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g // Change this line
// let result = difficultSpelling.match(myRegex);
// console.log(result);
// -------------------------------
// Match Characters that Occur Zero or More Times
// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex);
// gPhrase.match(goRegex);
// oPhrase.match(goRegex);
// In order, the three match calls would return the values ["goooooooo"], ["g"], and null.
// --------------------------------------------------------------------------------------------
// Find Characters with Lazy Matching
// In regular expressions, a greedy match finds the longest possible part of a string that fits 
// the regex pattern and returns it as a match. The alternative is called a lazy match, which 
// finds the smallest possible part of the string that satisfies the regex pattern.
// using '?' 
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<[a-z0-9]*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result)
// The output is <h1> 
// ---------------------------------------------------
// Exercice : 
// Find One or More Criminals in a Hunt
// let reCriminals = /[^a-zA-Z0-9]?C+[a-zA-Z0-9]*?/g;
// console.log('P1P54CCCcP2P6P3'.match(reCriminals)) // Change this line
// ^ will negate those characters, and '?' will match the least short patterns whichis is zero
// ----------------------

// Match beginning string patterns
// // let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);
// this will return true because the string actually starts with cal
// --------------------------------------
// matching ending string patterns
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);
// the resulkt will be true
// matching the end using the '$' sign
//---------------------------------
// matching all letters and numbers 
// usinjg \w 
//let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w+?/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2);
// console.log(result);
// the result will be each letter in the string which is 31 letters
//------------------------------------------
// Matching everything but letters and numbers 
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex);
// console.log(result);
// the result is six, inclding the period and five space.
// ---------------------------------
// matching all numbers 
// using \d 
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex);
// console.log(result)
// result is 4 digits 
// ---------------------------------------------
// match all non_numbers 
// using \D
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // gChange this line
// let result = movieName.match(noNumRegex).length;
// console.log(result)
// the result will be 17. 
//------------------------------------
// Restrict possible Usernames
// exercice
// Usernames can only use alpha-numeric characters.
// The only numbers in the username have to be at the end. 
// There can be zero or more of them at the end. 
// Username cannot start with the number.
// Username letters can be lowercase and uppercase.
// Usernames have to be at least two characters long. 
// A two-character username can only use alphabet letters as characters.
// solution ; 
// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
// let result = userCheck.test(username);
// console.log(result)
// code expalantion : 
// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input
// Matching white spaces 
// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// whiteSpace.match(spaceRegex);
// This match call would return [" ", " "].
