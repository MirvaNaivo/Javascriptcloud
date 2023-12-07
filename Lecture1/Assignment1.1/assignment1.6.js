// let input = " This is A stateMent "
// let output = input.trim()

// if(output.length <= 20) {
//     console.log(output.toLowerCase())
// }


const readline = require("node:readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question("Give statement: ", input => {
    output = input.trim()
    if(output.length <= 20) {
        console.log(output.toLowerCase())
    }
    else {
        console.log("Statement too long")
    }
    readline.close();
  });


