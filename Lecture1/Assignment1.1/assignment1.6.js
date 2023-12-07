// let input = " This is A stateMent "
// let output = input.trim()

// if(output.length <= 20) {
//     console.log(output.toLowerCase())
// }


// const readline = require("node:readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   readline.question("Give statement: ", input => {
//     output = input.trim()
//     if(output.length <= 20) {
//         console.log(output.toLowerCase())
//     }
//     else {
//         console.log("Statement too long")
//     }
//     readline.close();
//   });




const readline2 = require("node:readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline2.question("Give statement: ", input => {
    if(input.length > 20) {
        console.log("Statement too long")
    }
    else if(input !== input.toLowerCase()) {
        console.log("Statement has to be lowercase")
    }
    else if(input !== input.trim()) {
        console.log("Statement can't contain empty spaces in the beginning or in the end")
    }
    else {
        console.log(input)
    }
    readline2.close();
  });
