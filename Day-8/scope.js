// ****** Window Global Object ****** //

a = 'JavaScript'
b = 10

function letsLearnScope() {
    console.log(a, b) // JavaScript 10
    if (true) {
        console.log(a, b) // JavaScript 10
    }
}
letsLearnScope()
console.log(a, b) // JavaScript 10
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** Global Scope ****** //

let c = 'Java'
let d = 20

function LearnScope() {
    console.log(c, d) // Java 20
    if (true) {
        let c = 'Python'
        let d = 100
        console.log(c, d) // Python 100
    }
    console.log(c, d) // Java 20
}
LearnScope()
console.log(c, d) // Java 20
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** Local Scope ****** //

let e = 'Script' // is a global scope it will be found anywhere in this file
let f = 30 // is a global scope it will be found anywhere in this file
// Function scope
function letsScope() {
    console.log(e, f) // Script 30
    let value = false
    // block scope
    if (true) {
        let e = 'Python'
        let f = 20
        let g = 30
        let h = 40
        value = !value
        console.log(e, f, g, h, value) // Python 20 30  true
    }
    console.log(e, f, value) // Script 30 true
}
letsScope()
console.log(e, f) // Script 30
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

function Scope() {
    const gravity1 = 9.81
    console.log(gravity1)
}
// console.log(gravity1), Uncaught ReferenceError: gravity is not defined

if (true) {
    const gravity2 = 9.81
    console.log(gravity2) // 9.81
}
// console.log(gravity2), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
    console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined
/* *************************************************************************************** */