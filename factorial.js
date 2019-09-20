

function factorialize(num) {
    var factorial = 1
    for(var i=2; i<num+1; i++){
        factorial= factorial * i   
    }
    return factorial;
  }

  console.log(factorialize(5));



  