const lastName = "Smith"
const age = 31
const isDoctor = true
const sender = "Dr. Jones"
let end = ""
let nextAge = (age + 1).toString()
let title = ""

if(isDoctor) {
    title = "Dr."
}
else {
    title = "Mx."
}

if(nextAge.endsWith(1)) {
    end = "st"
}
else if (nextAge.endsWith(2)) {
    end = "nd"
}
else if (nextAge.endsWith(3)) {
    end = "rd"
}
else {
    end = "th"
}

nextAge = nextAge + end

const output = `Dear ${title} ${lastName} \n\nCongratulations on your ${nextAge} birthday! Many happy returns! \n\nSincerely, \n${sender}`
console.log(output)
