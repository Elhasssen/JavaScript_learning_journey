let str = 'abcdefghijklmnopqrstuvwxrz'
let x = str.indexOf('s')
let res =Math.abs(str.length - parseInt(str.indexOf('c')) -  13)
console.log(str[res])