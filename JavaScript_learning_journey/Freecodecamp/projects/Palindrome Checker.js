// Palindrome Checker
function palindrome(str) {
    const regex = /[a-z0-9]/ig;
    const filtStr = str.match(regex).join('').toLowerCase()
    const reversedStr = filtStr.split('').reverse().join('')
    return reversedStr == filtStr  ;
  }
  
  console.log(palindrome("1 eye for of 1 eye."));