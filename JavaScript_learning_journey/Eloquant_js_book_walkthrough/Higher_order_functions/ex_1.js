const ownLoop = (start, test, update, body) =>{
    for (let value = start; test(value); value = update(value)){
        body(value);
    }
}

ownLoop(3, x => x > 0, x => x - 1, console.log)