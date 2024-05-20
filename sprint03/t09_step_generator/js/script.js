function* generator() {
    let result = 1;
    
    while (true) {
      let input = prompt(`Previous result: ${result}. Enter a new number:`);
      
      if (input === null) {
        break;
      }
      
      let num = Number(input);
      
      if (isNaN(num)) {
        console.error("Invalid number!");
        continue;
      }
      
      result += num;
      
      if (result > 10000) {
        result = 1;
      }
      
      yield result;
    }
  }
  
  