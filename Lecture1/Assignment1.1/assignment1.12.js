const numberOfPeople = process.argv[2]
const groupSize = process.argv[3]
const groups = numberOfPeople / groupSize

// if (numberOfPeople && groupSize) {
//     console.log("Number of groups:", groups.toFixed(0))
// }
// else {
//     console.log("You have to give both parameters.")
// }

//Extra
console.log("Number of groups:", groups.toFixed(0))
