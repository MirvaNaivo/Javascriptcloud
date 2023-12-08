const lastName = "Smith"
const age = 35
const isDoctor = true
const sender = "Dr. Jones"
const nextAge = age + 1
let title = ""

if(isDoctor) {
    title = "Dr."
}
else {
    title = "Mx."
}

const output = `Dear ${title} ${lastName} \n\nCongratulations on your ${nextAge} birthday! Many happy returns! \n\nSincerely, \n${sender}`

console.log(output)

// Write a program that has four values: **lastName**, **age**, **isDoctor**, **sender**. The name parameters should be strings, age a number and isDoctor a boolean.

// Your program should output the following text:
// ```
// Dear <TITLE> <LAST_NAME>

// Congratulations on your <NEXT_AGE> birthday! Many happy returns!

// Sincerely,
// <SENDER>

// ```
// The `<LAST_NAME>` and `<SENDER>` should correspond to their variables.
// The `<TITLE>` should be "Dr." if the recipient is a doctor, and "Mx." if they are not.
// The value `<NEXT_AGE>` should be a string that consists of two parts:
// 1. A number one larger than the current age
// 2. "st" if the number ends in one, "nd" if the number ends in 2, "rd" if the number ends in 3, and "th" in all other cases.

// So for example if the age is 40, then the ´<NEXT_AGE>`should be "41st".
