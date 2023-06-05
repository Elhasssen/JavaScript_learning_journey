
let ha = [[1,2,3],1,[1,[2.3]]]

const flatten = (arr) => {
    return arr.reduce((a,b) => a.concat(b), [])
}
// another solution work with nested arrays as well using recursion
console.log(flatten(ha))