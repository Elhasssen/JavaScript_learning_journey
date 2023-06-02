const countBs = (str,lttr) => {
    let count = 0;
    for (let i =0; i<= str.length; i++){
        if (str[i] == lttr){
            count++;
        }
    }
    return count;
}


console.log(countBs('Boumeddine', 'd'));