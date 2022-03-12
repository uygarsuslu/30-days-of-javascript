// ****** Comparison Operators ****** //

console.log("5 == \"5\":", 5 == "5") // true
console.log("5 === \"5\":", 5 === "5") // false
console.log("5 != \"5\":", 5 != "5") // false
console.log("5 !== \"5\":", 5 !== "5") // true
/* *************************************************************************************** */


// ****** Logical Operators ****** //

console.log("4 > 3 && 10 > 5:", 4 > 3 && 10 > 5) // true
console.log("4 > 3 && 10 < 5:", 4 > 3 && 10 < 5) // false
/* *************************************************************************************** */
console.log("4 > 3 || 10 > 5:", 4 > 3 || 10 > 5) // true
console.log("4 > 3 || 10 < 5:", 4 > 3 || 10 < 5) // true
console.log("4 < 3 || 10 < 5:", 4 < 3 || 10 < 5) // false
/* *************************************************************************************** */
console.log("!(4 > 3):", !(4 > 3)) //  false
/* *************************************************************************************** */
let isMarried = !false
console.log("isMarried = !false:", isMarried) // true
/* *************************************************************************************** */


// ****** Increment Operator ****** //

let count1 = 0
console.log("count1:", count1)
console.log("++count1:", ++count1) // 1
console.log("arttırılan count1:", count1) // 1
/* *************************************************************************************** */
let count2 = 2
console.log("count2:", count2)
console.log("count2++:", count2++) // 0
console.log("arttırılan count2:", count2) // 3
/* *************************************************************************************** */


// ****** Ternary Operators ****** //

let isRaining1 = true
isRaining1
    ? console.log("true:", "You need a rain coat.")
    : console.log("false:", "No need for a rain coat.")

let isRaining2 = false
isRaining2
    ? console.log("true:", "You need a rain coat.")
    : console.log("false:", "No need for a rain coat.")
/* *************************************************************************************** */
let number1 = 5
number1 > 0
    ? console.log("true:", `${number1} is a positive number`)
    : console.log("false:", `${number1} is a negative number`)

number2 = -5
number2 > 0
    ? console.log("true:", `${number2} is a positive number`)
    : console.log("false:", `${number2} is a negative number`)
/* *************************************************************************************** */