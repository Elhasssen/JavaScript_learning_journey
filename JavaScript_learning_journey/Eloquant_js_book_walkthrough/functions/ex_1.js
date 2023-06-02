const min = (a,b) => {
    if (a>b) {
        return b
    } else if (b>a) {
        return a
    } else {
        return 'equal'
    }
}

console.log(min(1,1));