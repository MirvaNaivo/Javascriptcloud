const playerCount = 4
const isStressed = false
const hasIcecream = true
const sunShines = true
const notRaining = true
const temp = 20
const suzy = false
const dan = true
const tuesday = true

if (playerCount === 4) {
    console.log("true")
} 

if(isStressed || hasIcecream) {
    console.log("Mark is happy")
}

if(sunShines && notRaining && temp >= 20) {
    console.log("Beachday!")
}

if(tuesday && ((!suzy && dan) || (suzy && !dan))) {
    console.log("Arin is happy")
} else {
    console.log("Arin is not happy")
}