function checkCashRegister(price, cash, cid) {
    let change = cash * 100 - price * 100 ;
    let curr = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "NICKEL": 5,
    "PENNY": 1  }
  let cidSum = 0;
  for (let i =0 ; i < cid.length; i++) {
    cidSum += cid[i][1]* 100;
  }
  if (cidSum < change){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (cidSum == change) {
    return {status: "CLOSED", change: cid}
  } else {
    cid = cid.reverse()
    let answer= [];
    for (let elm of cid){
      let trace = [elm[0], 0];
      elm[1] = elm[1]*100;
      while (change >= curr[elm[0]] && elm[1] > 0){
        change -= curr[elm[0]]
        elm[1] -= curr[elm[0]]
        trace[1] += curr[elm[0]] /100
        
      }
      if (trace[1] > 0){
        answer.push(trace)
        console.log(answer)
      }
    
  
    }
    if (change > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return {status: "OPEN", change: answer}
    
    
  
  }
    
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));